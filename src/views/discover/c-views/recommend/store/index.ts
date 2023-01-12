import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '@/views/discover/c-views/recommend/service'

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  return res.banners
})

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNewAlbumAction = createAsyncThunk('newAlbum', async () => {
  const res = await getNewAlbum()
  return res.albums
})

// 飙升榜，新歌榜，原创榜的id
const rankingIds = [19723756, 3779629, 2884035]
// 保障一：获取到所有的结果后，进行dispatch操作
// 保障二：获取到的结果一定是有正确的顺序的
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  async () => {
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    const res = await Promise.all(promises)
    return res.map((item) => item.playlist)
  }
)

type InitialState = {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
}
const initialState: InitialState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    // changeBannersAction(state, { payload }) {}
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    }
  },
  extraReducers: (builder) => {
    builder
      /** pending fulfilled rejected */
      .addCase(
        fetchBannerDataAction.fulfilled,
        (state: InitialState, { payload }) => {
          state.banners = payload
        }
      )
      .addCase(
        fetchNewAlbumAction.fulfilled,
        (state: InitialState, { payload }) => {
          state.newAlbums = payload
        }
      )
      .addCase(
        fetchRankingDataAction.fulfilled,
        (state: InitialState, { payload }) => {
          state.rankings = payload
        }
      )
  }
})

export const { changeHotRecommendAction } = recommendSlice.actions
export default recommendSlice.reducer

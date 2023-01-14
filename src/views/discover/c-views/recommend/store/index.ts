import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '@/views/discover/c-views/recommend/service'

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchData',
  (arg, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
    getArtistList().then((res) => {
      dispatch(changeSettleSingersAction(res.artists))
    })
  }
)

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
  settleSingers: any[]
}
const initialState: InitialState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  },
  extraReducers: (builder) => {
    builder
      /** pending fulfilled rejected */
      .addCase(
        fetchRankingDataAction.fulfilled,
        (state: InitialState, { payload }) => {
          state.rankings = payload
        }
      )
  }
})

export const {
  changeHotRecommendAction,
  changeBannersAction,
  changeNewAlbumsAction,
  changeSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer

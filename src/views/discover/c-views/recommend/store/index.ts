import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum
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

type InitialState = {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
}
const initialState: InitialState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
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
  }
})

export const { changeHotRecommendAction } = recommendSlice.actions
export default recommendSlice.reducer

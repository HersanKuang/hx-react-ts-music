import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend
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

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banners: [] as any[],
    hotRecommends: [] as any[]
  },
  reducers: {
    // changeBannersAction(state, { payload }) {}
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    }
  },
  extraReducers: (builder) => {
    builder
      /** pending fulfilled rejected */
      .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
        state.banners = payload
      })
  }
})

export const { changeHotRecommendAction } = recommendSlice.actions
export default recommendSlice.reducer

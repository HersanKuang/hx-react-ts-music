import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '@/views/discover/c-views/recommend/service'

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  return res.banners
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banners: [] as any[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, () => {
        console.log('pending')
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
        state.banners = payload
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('rejected')
      })
  }
})

export default recommendSlice.reducer

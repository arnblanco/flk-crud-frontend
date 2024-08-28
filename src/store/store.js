import { configureStore } from '@reduxjs/toolkit'
import { nyseSlice } from './'

export const store = configureStore({
  reducer: {
    nyse: nyseSlice.reducer
  },
})

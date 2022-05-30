import userSlice from './features/user/userSlice'

export const store = configure({
    reducer: {
        user: userSlice,
        
    }
})
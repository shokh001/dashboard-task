import { createSlice } from '@reduxjs/toolkit'
import { removeItem, setItem } from 'helpers/persistance-storage'

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signUserStart: state => {
			state.isLoading = true
		},
		signUserSuccess: (state, action) => {
			state.isLoading = false
			state.user = action.payload
		},
		loginUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			setItem('token', JSON.stringify(action.payload))
		},
		signUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		logoutUser: (state) => {
			state.loggedIn = false
			state.isLoading = false
			removeItem('token');
		},
	},
})

export const { signUserFailure, logoutUser, loginUserSuccess, signUserStart, signUserSuccess } = authSlice.actions
export default authSlice.reducer

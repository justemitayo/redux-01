import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface user{
    id: string,
    name: string,
}
interface userState{
    users: user[]
} 

const initialState:userState ={
    users: [
        {id:'0', name: 'Neil Young'},
        {id:'1', name:'Temitayo'},
        {id:'2', name:'Dave Gray'}
    ]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectUser = (state: RootState) => state.usersReducer.users

// export const {} = usersSlice.actions
export default usersSlice.reducer
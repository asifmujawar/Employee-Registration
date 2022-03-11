import { createSlice } from '@reduxjs/toolkit'
import { UsersData } from '../FakeData'
const userSlice = createSlice ({
    name :"users",
    initialState : {
        value : UsersData
    },
    reducers :{
        adduser : (state,action)=> {
            state.value.push(action.payload)
            window.alert('Employee Registration Successfull')
        },
        updateUser : (state,action) =>{
            const element = state.value.findIndex((obj=>obj.id==action.payload.id))
            state.value[element].username = action.payload.username
        }
    },
})

export const {adduser} = userSlice.actions
export const {updateUser} = userSlice.actions

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'1',
    name:'Anshul Chauhan',
    email:'chauhan.9@iitj.ac.in',
    img:'',
    addresses:['IIT Jodhpur'],
    number:'091111111',
}

const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        updatenumber:(state,action)=>{
            state.number = action.payload;
        },
        deleteaddress:(state,action)=>{
            const index = action.payload
            state.addresses.splice(index,1)
        },
        editaddress:(state,action)=>{
            const updatedaddress = action.payload.updatedaddress
            const index = action.payload.index
            state.addresses[index] = updatedaddress
        },
        addnewaddress:(state,action)=>{
            const newaddress = action.payload
            state.addresses.push(newaddress)
        }
    }
})

export const {updatenumber,deleteaddress,addnewaddress,updatedaddress} = profileSlice.actions

export default profileSlice.reducer
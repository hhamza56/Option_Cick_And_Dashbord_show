import { createSlice } from "@reduxjs/toolkit";

const initialstate = {

    value:5,
    class:"React",
    Name:"Muhammad Hamza",
    Father_Name:"Muhammad Hussain",
    images:"https://i.pinimg.com/736x/f7/cf/ea/f7cfeada56951abeb13ebedece73f3f8.jpg"
}

const user_data_details = createSlice({

    initialState:initialstate,
    name :"user_data"
})

export default user_data_details.reducer
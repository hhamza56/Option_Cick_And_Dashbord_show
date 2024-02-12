import { configureStore } from '@reduxjs/toolkit'
import User_data_details from './User_data_details'


const store =  configureStore ({


    reducer:{
     user_data:User_data_details
    
    }
})

export {store}















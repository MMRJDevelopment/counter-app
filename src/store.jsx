import { configureStore } from '@reduxjs/toolkit'
import sliceCount from './slice/sliceCount'


export default configureStore({
    reducer:{
        counter:sliceCount
    }
})
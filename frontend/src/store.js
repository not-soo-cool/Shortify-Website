import { configureStore } from "@reduxjs/toolkit";
import { userRedcuer } from "./Reducers/UserReducer";
import { FormReducer, updateFormReducer } from "./Reducers/FormReducer";
import { DetailRedcuer, updateDetailRedcuer } from "./Reducers/DetailReducer";


const store = configureStore({
    reducer: {
        user: userRedcuer,
        form: FormReducer,
        detail: DetailRedcuer,
        updateDetail: updateDetailRedcuer,
        updateForm: updateFormReducer
    }
});


export default store
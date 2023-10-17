import axios from "axios"

export const createForm = (fname, first, last, email, password, username, dob, gender, address, city, state, postal) => async(dispatch) => {

    try {

        dispatch({
            type: "CreateFormRequest",
        });

        const {data} = await axios.post("/api/v1/form/create", {fname, first, last, email, password, username, dob, gender, address, city, state, postal}, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "CreateFormSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "CreateFormFailure",
            payload: error.response.data.message
        })  
    }

}

export const createProForm = (fname, first, last, email, password, username, dob, gender, phNumber, address, city, state, postal) => async(dispatch) => {

    try {

        dispatch({
            type: "CreateProFormRequest",
        });

        const {data} = await axios.post("/api/v1/form/create", {fname, first, last, email, password, username, dob, gender, phNumber, address, city, state, postal}, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "CreateProFormSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "CreateProFormFailure",
            payload: error.response.data.message
        })  
    }

}

export const getMyForms = () => async(dispatch) => {

    try {

        dispatch({
            type: "SavedFormRequest",
        });

        const {data} = await axios.get("/api/v1/my/forms");

        // console.log(data);

        dispatch({
            type: "SavedFormSuccess",
            payload: data.forms,
        })
        
    } catch (error) {

        dispatch({
            type: "SavedFormFailure",
            payload: error.response.data.message
        })  
    }
}

export const viewForm = (id) => async(dispatch) => {

    try {

        dispatch({
            type: "ViewFormRequest",
        });

        const {data} = await axios.get(`/api/v1/form/${id}`)

        // console.log(data);

        dispatch({
            type: "ViewFormSuccess",
            payload: data.form,
        })
        
    } catch (error) {
        dispatch({
            type: "ViewFormFailure",
            payload: error.response.data.message
        })
    }
}

export const UpdateForm = (id, fname, first, last, email, password, username, dob, gender, address, city, state, postal) => async(dispatch) => {

    try {

        dispatch({
            type: "UpdateFormRequest",
        });

        const {data} = await axios.put(`/api/v1/form/${id}`, {fname, first, last, email, password, username, dob, gender, address, city, state, postal}, {
            headers:{
                "Content-Type":"application/json"
            }
        })

        // console.log(data);

        dispatch({
            type: "UpdateFormSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "UpdateFormFailure",
            payload: error.response.data.message
        })
    }
}

export const UpdateProForm = (id, fname, first, last, email, password, username, dob, gender, phNumber, address, city, state, postal) => async(dispatch) => {

    try {

        dispatch({
            type: "UpdateProFormRequest",
        });

        const {data} = await axios.put(`/api/v1/form/${id}`, {fname, first, last, email, password, username, dob, gender, phNumber, address, city, state, postal}, {
            headers:{
                "Content-Type":"application/json"
            }
        })

        // console.log(data);

        dispatch({
            type: "UpdateProFormSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "UpdateProFormFailure",
            payload: error.response.data.message
        })
    }
}
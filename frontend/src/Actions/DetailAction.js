import axios from "axios"

export const createDetail = (dname, first, middle, last, dob, gender, address, city, state, postal, ssn, id) => async(dispatch) => {

    try {

        dispatch({
            type: "CreateDetailRequest",
        });

        const {data} = await axios.post("/api/v1/detailform/create", {dname, first, middle, last, dob, gender, address, city, state, postal, ssn, id}, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "CreateDetailSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "CreateDetailFailure",
            payload: error.response.data.message
        })  
    }

}

export const createProDetail = (dname, first, middle, last, prefer, email, dob, gender, phNumber, address, city, state, postal, ssn, id, marital, eName, eRelation, eContact) => async(dispatch) => {

    try {

        dispatch({
            type: "CreateProDetailRequest",
        });

        const {data} = await axios.post("/api/v1/detailform/create", {dname, first, middle, last, prefer, email, dob, gender, phNumber, address, city, state, postal, ssn, id, marital, eName, eRelation, eContact}, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "CreateProDetailSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "CreateProDetailFailure",
            payload: error.response.data.message
        })  
    }

}

export const getMyDetails = () => async(dispatch) => {

    try {

        dispatch({
            type: "SavedDetailRequest",
        });

        const {data} = await axios.get("/api/v1/my/detailforms");

        // console.log(data);

        dispatch({
            type: "SavedDetailSuccess",
            payload: data.details,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "SavedDetailFailure",
            payload: error.response.data.message
        })  
    }
}

export const viewDetailForm = (id) => async(dispatch) => {

    try {

        dispatch({
            type: "ViewDetailRequest",
        });

        const {data} = await axios.get(`/api/v1/detailform/${id}`)

        // console.log(data);

        dispatch({
            type: "ViewDetailSuccess",
            payload: data.detail,
        })
        
    } catch (error) {
        dispatch({
            type: "ViewDetailFailure",
            payload: error.response.data.message
        })
    }
}

export const UpdateDetailForm = (id, dname, first, middle, last, dob, gender, address, city, state, postal, ssn, nid) => async(dispatch) => {

    try {

        dispatch({
            type: "UpdateDetailRequest",
        });

        const {data} = await axios.put(`/api/v1/detailform/${id}`, {dname, first, middle, last, dob, gender, address, city, state, postal, ssn, nid}, {
            headers:{
                "Content-Type":"application/json"
            }
        })

        // console.log(data);

        dispatch({
            type: "UpdateDetailSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "UpdateDetailFailure",
            payload: error.response.data.message
        })
    }
}

export const UpdateProDetailForm = (id, dname, first, middle, last, dob, gender, address, city, state, postal, ssn, nid, prefer, marital, email, phNumber, eName, eRelation, eContact) => async(dispatch) => {

    try {

        dispatch({
            type: "UpdateProDetailRequest",
        });

        const {data} = await axios.put(`/api/v1/detailform/${id}`, {dname, first, middle, last, dob, gender, address, city, state, postal, ssn, nid, prefer, marital, email, phNumber, eName, eRelation, eContact}, {
            headers:{
                "Content-Type":"application/json"
            }
        })

        // console.log(data);

        dispatch({
            type: "UpdateProDetailSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "UpdateProDetailFailure",
            payload: error.response.data.message
        })
    }
}
import axios from "axios";

export const Get_API_Response = "Get_API_Response";

export const API_Response=(data)=>{
    return {
        type: Get_API_Response,
        value: data
    }
}

export const CallApi = () => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/`).then((res) => {
            dispatch(API_Response(res.data))
        })

    }
}
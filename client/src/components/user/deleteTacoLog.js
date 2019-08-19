import axios from 'axios';

export function deleteTacoLog(id) {
    return dispatch => {
        if (window.confirm('Are you sure you want to delete this Taco Log?')) {
            dispatch({ type: "DELETING_LOG" });
            axios
            .delete(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${id}`, {headers: {token: token}})
            .then(res => {
                dispatch({
                    type: "DELETE_LOG_SUCCESS",
                    deleteTacoLogId: tacoLogId
                });
            })
        }
    }
}
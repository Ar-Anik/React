import { useEffect, useReducer } from "react";

const intialState = {
    loading : true,
    get: {},
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Success" :
            return {
                loading : false,
                get : action.value,
                error : '',
            };
        case "Faild" :
            return {
                loading : false,
                get : '',
                error : action.value,
            };
        default : 
            return state;
    }
};

function GetPost() {
    const [state, dispatch] = useReducer(reducer, intialState);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type : "Success",
                    value : data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: "Error",
                    value : error,
                })
            })
    }, []);

    return (
        <div>
            {state.loading ? "Loading..." : `Body : ${state.get.body}`}
            {state.error ? state.error : null}
        </div>
    );
}

export default GetPost;

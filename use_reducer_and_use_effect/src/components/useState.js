import { useEffect, useState } from "react";

function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [get, setGet] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setGet(data);
                setError('');
            })
            .catch((error) => {
                setLoading(false);
                setGet({});
                setError(error);
            })
    }, []);

    return (
        <div>
            {loading ? 'Loading ...' : `Body : ${get.body}`}
            {error ? error : null}
        </div>
    );
}

export default GetPost;
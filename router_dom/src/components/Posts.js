// function Posts({match}) {
//     const {params} = match;
//     return (
//         <div>
//             <h1>This is Comes From Posts - {params.catagory} </h1>
//         </div>
//     );
// }

// export default Posts;

import { useParams } from 'react-router-dom';

function Posts() {
    const { category } = useParams();

    return (
        <div>
            <h1>This is Comes From Posts - {category} </h1>
        </div>
    );
}

export default Posts;

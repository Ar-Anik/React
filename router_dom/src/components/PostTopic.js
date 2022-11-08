// function PostsTopic({match}) {
//     const {params} = match;
//     return (
//         <div>
//             <h1>This is From PostTopic - {params.catagory} - {params.topic} </h1>
//         </div>
//     );
// }

// export default PostsTopic;

import { useParams } from 'react-router-dom';

function PostsTopic({}) {
    const { category, topic } = useParams();

    return (
        <div>
            <h1>This Comes From PostsTopic - {category} - {topic} </h1>
        </div>
    );
}

export default PostsTopic;

import React from 'react';

function Title(){
    console.log('renderint title........');
    
    return <h2> useCallBack Hook </h2>;
}

// memo cash element and not render until not need like as componentShouldUpdate() and work as Higher Order Component
export default React.memo(Title);

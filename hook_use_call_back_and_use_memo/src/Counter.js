import React from 'react';

function Counter({ count, title }){
    console.log(`rendering ${title}`);

    return (
        <p>
            {title} is {count}
        </p>
    );
}

// memo cash element and not render until not need like as componentShouldUpdate() and work as Higher Order Component
export default React.memo(Counter);

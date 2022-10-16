import React from 'react';

function Button({ handleClick, children}){
    console.log(`rendering butto  ${children}`);

    return (
        <p>
            <button type="button" onClick={handleClick}>
                { children }
            </button>
        </p>
    );
}

// memo, cash element and not render until not need like as componentshouldUpdate() and work as Higher Order Component
export default React.memo(Button);

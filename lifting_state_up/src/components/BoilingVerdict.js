import React from 'react';

function BoilingVerdict({celsius}){
    if(celsius >= 100)
        return <p>This Water Would Boil.</p>;
    
    return <p>Water Would Not Boil.</p>;
}

export default BoilingVerdict;


import { useState } from 'react';

function Counter()
{
    const [count, setCounter] = useState(0);

    // function Add5(){
    //     let i = 0;
    //     while(i < 5)
    //     {
    //         setCounter(count + 1);
    //         i++;
    //     }
    // }

    function Add5(){
        let i = 0;
        while(i < 5)
        {
            setCounter((previus) => previus + 1);
            i++;
        }
    }

    return (
        <>
            <div>
                {count}
            </div>

            <hr />
            <button type='button' onClick={() => 
                setCounter((previus) => previus + 1)
            }>Add 1</button>

            <br />
            <br />
            
            <button type='button' onClick={Add5}>Add 5</button>
        </>
    );
}

export default Counter;

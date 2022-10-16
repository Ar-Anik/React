import { useCallback, useMemo, useState } from 'react';

import Button from './Button';
import Counter from './Counter';
import Title from './Title';

function Components(){
    const [cnt1, setCount1] = useState(0);
    const [cnt2, setCount2] = useState(0);

    // const incrementByOne = useCallback(() => {
    //     setCount1(cnt1 + 1);
    // }, [cnt1]);

    const incrementByOne = useCallback(() => {
        setCount1((previus) => previus + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((previus) => previus + 5);
    }, []);

    const EvenOdd = useMemo(() => {
        var i = 0;
        while(i <= 1000000000)
            i++;

        return cnt1%2;;
    }, [cnt1]);

    return (
        <>
            <Title />

            <Counter count={cnt1} title="Counter-1"/>
            <Button handleClick={incrementByOne}>Increment By One</Button>

            <hr />
            
            <div>
                {EvenOdd ? "ODD" : "EVEN"}
            </div>

            <hr />

            <Counter count={cnt2} title="Counter-2" />
            <Button handleClick={incrementByFive}>Increment By Five</Button>
        </>
    );
}

export default Components;

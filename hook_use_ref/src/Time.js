import { useEffect, useRef, useState } from 'react';

function Time(){
    const [date, setDate] = useState(new Date());
    let intervalRef = useRef();

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        intervalRef.current = setInterval(tick, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <p>Time : {date.toLocaleTimeString()}</p>

            <button type="button" onClick={() =>
                clearInterval(intervalRef.current)
            }>Stop Time</button>
        </div>
    );
}

export default Time;

import { useEffect, useState } from "react";

function HookUseEffect(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('Updating Document Title');
        document.title = `Clicked ${count} Times`; // ComponentWillUpdated
    }, [count]); // Dependencies

    // First Render Run
    // useEffect(()=> {
    //     setInterval(updateDate, 1000);
    // }, []);

    useEffect(() => {
        console.log("Fucking Clock");
        let interval = setInterval(updateDate, 1000);

        // componentWillUnmount
        return () => {
            console.log("Component Unmounted");
            clearInterval(interval);
        }; 
    }, []); // componentwillMount()

    const addClick = () => {
        setCount((previusCount) => previusCount + 1);
    };

    const updateDate = () => {
        setDate(new Date());
    };

    return (
        <>
            <p>Time : { date.toLocaleTimeString() }</p>

            <p>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
            </p>

            <p>
                <button type="button" onClick={addClick}>
                    Add-1
                </button>
            </p>
        </>
    );
}

export default HookUseEffect;

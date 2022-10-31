import { useEffect, useState } from 'react';

function LayoutOne() {
    const [screen, setScreen] = useState(false);

    const checkScreen = () => {
        setScreen(window.innerWidth < 868);
    };

    useEffect(() => {
        checkScreen();

        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <h1>Browser screen is {screen ? "Small" : "Large"}</h1>
    );
}

export default LayoutOne;

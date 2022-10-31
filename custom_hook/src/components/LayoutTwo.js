import { useEffect, useState } from 'react';
import style from '../CSS/style.module.css';

function LayoutTwo() {
    const [screen, setScreen] = useState(false);

    const checkScreen = () => {
        setScreen(window.innerWidth < 868);
    }

    useEffect(()=> {
        checkScreen();
        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    })

    return (
        <div className={screen ? style.small : style.large}>
            <h1>This is From Different Component</h1>
        </div>
    );
}

export default LayoutTwo;

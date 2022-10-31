import { useEffect, useState } from 'react';

const useCustomHook2 = (ScreenSize) => {
    const [scrnsize, setScrnsize] = useState(false);

    useEffect(() => {
        const ChangeScreen = () => {
            setScrnsize(window.innerWidth < ScreenSize);
        };

        ChangeScreen();

        window.addEventListener('resize', ChangeScreen);

        return () => window.removeEventListener('resize', ChangeScreen);
    }, [ScreenSize]);

    return scrnsize;
};

export default useCustomHook2;

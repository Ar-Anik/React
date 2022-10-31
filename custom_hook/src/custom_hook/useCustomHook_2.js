// import { useEffect, useState } from 'react';

// const useCustomHook2 = (ScreenSize) => {
//     const [scrnsize, setScrnsize] = useState(false);

//     useEffect(() => {
//         const ChangeScreen = () => {
//             setScrnsize(window.innerWidth < ScreenSize);
//         };

//         ChangeScreen();

//         window.addEventListener('resize', ChangeScreen);

//         return () => window.removeEventListener('resize', ChangeScreen);
//     }, [ScreenSize]);

//     return scrnsize;
// };

// export default useCustomHook2;

import { useCallback, useEffect, useState } from 'react';

const useCustomHook2 = (ScreenSize) => {
    const [scrnsize, setScrnsize] = useState(false);

    const ChangeScreen = useCallback(() => {
        setScrnsize(window.innerWidth < ScreenSize);
    }, [ScreenSize]);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        ChangeScreen;

        window.addEventListener('resize', ChangeScreen);

        return () => window.removeEventListener('resize', ChangeScreen);
    }, [ChangeScreen]);

    return scrnsize;
};

export default useCustomHook2;

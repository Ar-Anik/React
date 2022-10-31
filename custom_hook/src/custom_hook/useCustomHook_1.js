import { useEffect, useState } from "react";

const useCustomHook1 = () => {
    const [scrnsize, setScrnsize] = useState(false);

    const ChangeSize = () => {
        setScrnsize(window.innerWidth < 768);
    }

    useEffect(() => {
        ChangeSize();

        window.addEventListener('resize', ChangeSize);

        return () => window.removeEventListener('resize', ChangeSize);
    }, []);

    return scrnsize;
}

export default useCustomHook1;

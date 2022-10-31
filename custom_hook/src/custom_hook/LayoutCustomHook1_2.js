import styles from '../CSS/style.module.css';
import useCustomHook1 from "./useCustomHook_1";

function Layout2() {
    const ScreenSize = useCustomHook1();

    return (
        <div className={ScreenSize ? styles.small : styles.large}>
            <h1>This is Layout 2</h1>
        </div>
    );
}

export default Layout2;


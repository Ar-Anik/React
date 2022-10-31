import style from '../CSS/style.module.css';
import useCustomHook2 from "./useCustomHook_2";

function Layout2() {
    const ScreenSize = useCustomHook2("600");

    return (
        <div className={ScreenSize ? style.small : style.large}>
            <h1>This is From useCustom-2 and Layout-2</h1>
        </div>
    );
}

export default Layout2;

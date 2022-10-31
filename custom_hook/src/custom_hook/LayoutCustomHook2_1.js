import useCustomHook2 from "./useCustomHook_2";

function Layout1() {
    const ScreenSize = useCustomHook2(780);

    return (
        <div>
            <h1>Size of Browser Screen is {ScreenSize ? "Small" : "Large"}</h1>
        </div>
    );
}

export default Layout1;

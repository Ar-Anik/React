import useCustomHook1 from "./useCustomHook_1";

function Layout1() {
    const ScreenSize = useCustomHook1();

    return (
        <div>
            <h1>Browser Size is {ScreenSize ? "Small" : "Large"}</h1>
        </div>
    );
}

export default Layout1;

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Loader} from "../Loader/Loader";


const Layout = () => {

    return(
        <>
            <Suspense fallback={<div className="loader_container"><Loader /></div>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default Layout;
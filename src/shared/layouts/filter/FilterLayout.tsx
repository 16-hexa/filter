import {Outlet} from "react-router-dom";
import {FooterFilter, HeaderFilter} from "@/widgets";

export const FilterLayout = () => {
    return (
        <div>
            <HeaderFilter />
            <main>
                <Outlet />
            </main>
            <FooterFilter />
        </div>
    );
};
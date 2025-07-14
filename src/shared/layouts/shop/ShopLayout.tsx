import {Outlet} from "react-router-dom";
import { FooterShop, HeaderShop} from "@/widgets";

export const ShopLayout = () => {
    return (
        <div>
            <HeaderShop />
            <main>
                <Outlet />
            </main>
            <FooterShop />
        </div>
    );
};
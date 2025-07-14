import {Outlet} from "react-router-dom";
import {Footer, Header} from "@/widgets";

export const ShopLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
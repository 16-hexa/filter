import {Outlet} from "react-router-dom";
import {Footer, Header} from "@/widgets";

export const FilterLayout = () => {
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
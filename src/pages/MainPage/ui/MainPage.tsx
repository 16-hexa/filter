import styles from './main.module.scss';
import {Address, Founder, LandingPage} from "@/features";

export const MainPage = () => {
    return(
        <div>
            <LandingPage />
            <Founder />
            <Address />
        </div>
    )
}
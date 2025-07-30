import styles from './main.module.scss';
import {Founder, LandingPage} from "@/features";

export const MainPage = () => {
    return(
        <div>
            <LandingPage />
            <Founder />
            <br/>
        </div>
    )
}
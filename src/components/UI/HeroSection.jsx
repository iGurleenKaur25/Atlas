import { FaArrowRight } from "react-icons/fa";
import {NavLink} from "react-router-dom";


export const HeroSection = () => {
    return (
        <main className="hero-section">
            <div className = 'container grid'>
                <div className="hero-content">
                    <h1>Explore the world</h1>
                    <p className="para">
                        Discover the history jrhbfe rkjfir eerfflji ,<br></br>
                        beau hugf ,
                        ddjbfuwhbrf
                    </p>
                    <button className="explore"><NavLink to='/country'>Start Exploring <FaArrowRight /></NavLink></button>
                    
                </div>
            </div>
        </main>
    )
};
    
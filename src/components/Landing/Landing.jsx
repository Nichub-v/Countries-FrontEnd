import { Link } from "react-router-dom";
import bgImg from "../../../img/landingBg.jpg"
import { Container } from "../../styles/Landing.styled.js" 

import { HiCamera } from "react-icons/hi2";

export default function Landing() {

    return (
        <Container bgImg={bgImg}>
            <div className="bgDiv"></div>
            <header className="header"></header>
            
            <div className="text-container">
                <h1 className="title">Bienvenido</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus explicabo accusamus error inventore illum in culpa iste.</p>
                <Link to="/home"><button className="button">Acceder</button></Link>
            </div>
            
        </Container>

    )
}
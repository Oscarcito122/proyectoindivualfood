import {Link} from "react-router-dom";
import styled from "./Landing.module.css"

export default function Landing() {
    return (<>
            <h1 className={styled.title}>PI - FOOD</h1>
          <p className={styled.info}>Individual project created for ¡Soy Henry!</p>
        <Link to="/home">
            <button className={styled.button}>Welcome</button>
        </Link>
        <p className={styled.credits}>By: Tiago Bergmann</p>
    </>)
}
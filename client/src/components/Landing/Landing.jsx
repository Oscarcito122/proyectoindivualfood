import {Link} from "react-router-dom";
import styled from "./Landing.module.css"

export default function Landing() {
    return (<>
        <Link to="/home">
            <h1 className={styled.title}>PI - FOOD</h1>
            <button className={styled.button}>Welcome</button>
        </Link>
        <div className={styled.capa} />
    </>)
}
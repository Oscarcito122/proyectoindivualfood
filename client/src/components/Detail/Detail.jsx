import { useDispatch, useSelector } from "react-redux";
import { getFoodId } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Detail.module.css"




export default function Detail(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id

    useEffect(() => 
    dispatch(getFoodId(id)), 
    // eslint-disable-next-line
    [])

    const {image, title, diet, dishTypes, summary, steps, healthScore} = useSelector(state => state.foodDetail)
    return (
        <div className={styles.enc} >
            <h1>{title}</h1>
            <img className={styles.imgdetail} src={image} alt="Imagen no encontrada"/>
            <p>DIETS: {diet}</p>
            <p>DISH TYPES: {dishTypes}</p>
            <p className={styles.summary}>SUMMARY: {summary}</p>
            <p className={styles.steps}>STEPS: {steps}</p>
            <h2>HEALTHSCORE: {healthScore}</h2>
           
        </div>)
}
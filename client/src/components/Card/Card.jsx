import styled from "styled-components";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";


const CardDiv = styled.div`
  width: 30%;
  //height: fit-content;
  //border: solid black 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:  #00000000;
  img {
    border-radius: 30px;
    margin: 15px;
    display: flex;
    width: 300px;
    height: 240px;
  }
  :hover {
    transition: 1s;
    background:  #00000000;
    img {
      transition: 1s;
      width: 390px;
      height: 312px;
      border-radius: 250px;
      filter: drop-shadow(0 0 5px  #e5eaec );
    }
  }
`
const NameP = styled.p`
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, sans-serif;
  width: 350px;
  font-size: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const DietP = styled.p`
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, sans-serif;
  width: 350px;
  font-size: 1.2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Card = (props) => {

    return (
        <CardDiv>
                <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt="Imag no encontrada"/>
                </Link>
            <div className={styles.hscore}>
                <NameP>{props.healthScore}</NameP>
            </div>
                    <NameP>{props.title}</NameP>
            <DietP>Diets: {
                props.diet.map((d, index)=>{
                    return <span key={index}> {d} </span>
                })
            } </DietP>

        </CardDiv>
    )
}

export default Card;
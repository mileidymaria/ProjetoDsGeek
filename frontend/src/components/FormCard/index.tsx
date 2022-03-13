import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { Character } from "types/character";
import { BASE_URL } from "utils/requests";
import './style.css'

type Props = {
    characterId : string;
}

function FormCard({characterId} : Props){

    const[character, setCharacter] = useState<Character>();
    
    useEffect(() => {
        axios.get(`${BASE_URL}/characters/${characterId}`)
        .then(response => {
            setCharacter(response.data);
            console.log(response.data);
        })
    }, [characterId]);
    
    return(
        <div className="ds-geek-container container black-bg">
            <h1 className="character-quiz-title">QUIZ</h1>
            <div className="ds-geek-flex">
                <div className="ds-geek-card-bottom-container">
                    <img className="ds-geek-character-card-image" src={character?.image} alt={character?.name} />
                    <form className="ds-geek-form">
                        <label htmlFor="score"> Answer the questions below: </label>
                        <div className="form-group ds-geek-form-group">
                            <label htmlFor="score">{character?.firstQuestion}</label>
                            <select className="form-control" id="score">
                                <option>{character?.firstQuestionWrongtAnswer}</option>
                                <option>{character?.firstQuestionRightAnswer}</option>
                            </select>
                            <label htmlFor="score">{character?.secondQuestion}</label>
                            <select className="form-control" id="score">
                                <option>{character?.secondQuestionRightAnswer}</option>
                                <option>{character?.secondQuestionWrongtAnswer}</option>
                            </select>
                            <label htmlFor="score">{character?.thirdQuestion}</label>
                            <select className="form-control" id="score">
                                <option>{character?.thirdQuestionWrongtAnswer}</option>
                                <option>{character?.thirdQuestionRightAnswer}</option>
                            </select>
                        </div>
                    </form >
                </div >
                <div className="ds-geek-description-container">
                    <h3>{character?.name} HISTORY</h3>
                    <p>{character?.description}</p>
                </div>
            </div>
            <div className="ds-geek-form-btn-container second-black-bg">
                <button type="submit" className="btn ds-geek-btn">FINALIZAR</button>
                <Link to="/">
                    <button className="btn ds-geek-btn">CANCELAR</button>
                </Link>
            </div>
        </div >
    );
}

export default FormCard;
import { Link } from 'react-router-dom';
import { Character } from 'types/character';
import './style.css';

type Props = {
    character: Character;
}

function characterCard({character} : Props){

    return (    
        <div className="ds-geek-card">
            <img className="ds-geek-movie-card-image" src={character.image} alt={character.name} />
            <div className="ds-geek-card-bottom-container">
                <h3>{character.name}</h3>
                <Link to={`/quiz/${character.id}`} >
                    <button className="btn ds-geek-btn-answer">RESPONDER QUIZ</button>
                </Link>
            </div>
        </div>
    );

}

export default characterCard;
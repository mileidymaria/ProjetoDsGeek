import { Link } from "react-router-dom";
import './style.css'

function form(){
    const character = {
        id: 1,
        image: "https://img.quizur.com/f/img622554dd514403.21783095.jpg?lastEdited=1646613746",
        name: "BATMAN",
        description:"numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        first_question: "Mothers name?",
        first_question_right_answer: "Martha Wayne",
        first_question_wrong_answer: "Graça Wayne",
        second_question: "Fathers name?",
        second_question_right_answer: "Thomas Wayne",
        second_question_wrong_answer: "Kar-El",
        third_question: "Public enemy?",
        third_question_right_answer: "Riddler",
        third_question_wrong_answer: "Ares"
    };
    
    return(
        <div className="ds-geek-container container black-bg">
            <h1 className="character-quiz-title">QUIZ</h1>
            <div className="ds-geek-flex">
                <div className="ds-geek-card-bottom-container">
                    <img className="ds-geek-character-card-image" src={character.image} alt={character.name} />
                    <form className="ds-geek-form">
                        <label htmlFor="score"> Answer the questions below: </label>
                        <div className="form-group ds-geek-form-group">
                            <label htmlFor="score">{character.first_question}</label>
                            <select className="form-control" id="score">
                                <option>{character.first_question_wrong_answer}</option>
                                <option>{character.first_question_right_answer}</option>
                            </select>
                            <label htmlFor="score">{character.second_question}</label>
                            <select className="form-control" id="score">
                                <option>{character.second_question_right_answer}</option>
                                <option>{character.second_question_wrong_answer}</option>
                            </select>
                            <label htmlFor="score">{character.third_question}</label>
                            <select className="form-control" id="score">
                                <option>{character.third_question_wrong_answer}</option>
                                <option>{character.third_question_right_answer}</option>
                            </select>
                        </div>
                    </form >
                </div >
                <div className="ds-geek-description-container">
                    <h3>{character.name} HISTORY</h3>
                    <p>{character.description}</p>
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

export default form;
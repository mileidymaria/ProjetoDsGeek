import FormCard from "components/FormCard";
import { Link, useParams } from "react-router-dom";
import { Character } from "types/character";


function Form(){

    const params = useParams();
    
    return(
        <FormCard characterId={`${params.characterId}`}/>
    );
}

export default Form;
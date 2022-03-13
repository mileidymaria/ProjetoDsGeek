import axios from "axios";
import CharacterCard from "components/characterCard";
import Pagination from "components/pagination";
import { BASE_URL } from "utils/requests";
import "./style.css"

function listing(){

    //FORMA RUIM
    axios.get(`${BASE_URL}/characters`).then(response => {
        console.log(response.data)
    });
    return(
        <div className="container">
            <Pagination />  
            <div className="">
                <div className="ds-geek-list-container-character">
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                    <CharacterCard /> 
                </div> 
            </div>    
        </div>
    );
}

export default listing;
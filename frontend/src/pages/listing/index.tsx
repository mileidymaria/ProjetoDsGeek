import CharacterCard from "components/characterCard";
import Pagination from "components/pagination";
import "./style.css"

function listing(){
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
                </div> 
            </div>    
        </div>
    );
}

export default listing;
import axios from "axios";
import CharacterCard from "components/characterCard";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { CharacterPage } from "types/character";
import { BASE_URL } from "utils/requests";
import "./style.css"

function Listing(){
    
    const [pageNumber, setPageNumber] = useState(0);
    useEffect(() => {
        axios.get(`${BASE_URL}/characters`).then(response => {
            const data = response.data as CharacterPage;
            setPageNumber(data.number);
            console.log(response.data);
        });
    })

    return(
        <div className="container">
            <p>{pageNumber}</p>
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

export default Listing;
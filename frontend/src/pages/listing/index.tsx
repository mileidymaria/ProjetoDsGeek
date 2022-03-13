import axios from "axios";
import CharacterCard from "components/characterCard";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { CharacterPage } from "types/character";
import { BASE_URL } from "utils/requests";
import "./style.css"

function Listing(){
    
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<CharacterPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/characters?size=12&page=${pageNumber}`)
        .then(response => {
            const data = response.data as CharacterPage;
            setPage(data);
            console.log(data);
        });
    }, [pageNumber]);

    return(
        <div className="container">
            <Pagination />  
            <div className="ds-geek-list-container-character">
                {page.content.map(character => (
                    <div key ={character.id} className="">
                        <CharacterCard character={character}/>  
                    </div> 
                ))}
            </div>    
        </div>
    );
}

export default Listing;
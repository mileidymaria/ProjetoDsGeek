import {ReactComponent as Arrow} from 'assets/img/seta.svg';
import { CharacterPage } from 'types/character';
import './style.css'

type Props = {
    page : CharacterPage;
    onChange: Function;
}

function Pagination({ page, onChange } : Props){
  return (
    <div className="ds-geek-pagination-container">
        <div className="ds-geek-pagination-box">
            <button className="ds-geek-pagination-button" disabled={page.first} onClick = {() => onChange(page.number-1)} >
                <Arrow />
            </button>
            <p>{`${page.number + 1} de ${page.totalPages}`}</p>
            <button className="ds-geek-pagination-button" disabled={page.last} onClick = {() => onChange(page.number+1)}>
                <Arrow className="ds-geek-flip-horizontal" />
            </button>
        </div>
    </div> 
    );
  
}

export default Pagination;
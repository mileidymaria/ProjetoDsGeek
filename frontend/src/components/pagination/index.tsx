import {ReactComponent as Arrow} from 'assets/img/seta.svg';
import './style.css'

function Pagination(){
  return (
    <div className="ds-geek-pagination-container">
        <div className="ds-geek-pagination-box">
            <button className="ds-geek-pagination-button" disabled={true} >
                <Arrow />
            </button>
            <p>{`${1} de ${3}`}</p>
            <button className="ds-geek-pagination-button" disabled={false} >
                <Arrow className="ds-geek-flip-horizontal" />
            </button>
        </div>
    </div> 
    );
  
}

export default Pagination;
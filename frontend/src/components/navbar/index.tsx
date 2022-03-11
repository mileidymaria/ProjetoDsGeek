import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './style.css'

function Navbar(){
  return (
        <header>
            <nav className="container">
                <div className="ds-geek-content">
                    <h1>DSGeek</h1>
                    <a href="https://github.com/mileidymaria">
                        <div className='ds-geek-contact-container'>
                            <GitHubIcon />
                            <p className="ds-geek-contact-link">/mileidymaria</p>
                        </div>
                        
                    </a>
                </div>
            </nav>
        </header>  
    );
  
}

export default Navbar;
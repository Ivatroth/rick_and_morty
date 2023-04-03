import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom"

export default function Nav(props){
    const {pathname} = useLocation();
    return(
        <nav className={styles.nav}>

            <div >
                <Link to="/home"><h3 className={styles.subtitle}>Home</h3></Link>
            </div>
            <div >
                <Link to="/about"><h3 className={styles.subtitle}>About</h3></Link>
            </div>
            <div >
                <Link to="/favorites"><h3 className={styles.subtitle}>Favorites</h3></Link>
            </div>
            <div className={styles.search}>
                {pathname === "/home" && <SearchBar onSearch={props.onSearch} />}
            </div>
            
        </nav>
    );
}
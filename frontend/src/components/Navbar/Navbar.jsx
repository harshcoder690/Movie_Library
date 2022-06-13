import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from "./Navbar.css";
import { HomePage } from '../Homepage/HomePage';

export const Navbar = () => {

    const [val, setVal] = useState(1);

    const valhandler = () => {
        setVal(2);
    }

    return (
        <div className={styles.body}>
            <nav className={styles.navbody}>
                <ul>
                    <li onClick={valhandler}>
                        <Link to="/Home"><div className={styles.sidenavlink}>Home</div></Link>
                    </li>
                    <li onClick={valhandler}>
                        <Link to="/PrivateList"><div className={styles.sidenavlink}>My Favourites</div></Link>
                    </li>
                    <li onClick={valhandler}>
                        <Link to="/PublicList"><div className={styles.sidenavlink}>Public Favorites</div></Link>
                    </li>
                </ul>
            </nav>
            {val == 1 ? <HomePage /> : <Outlet />}

        </div>
    );

}
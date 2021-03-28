import React from 'react'
import Link from 'next/link';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/'>HomePage</Link></li>
                <li><Link href='/about'>AboutPage</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar

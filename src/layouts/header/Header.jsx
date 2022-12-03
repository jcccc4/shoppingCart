import { NavLink,Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header(){
    const mainUrl = "/shoppingCart"
    return (<nav className={styles.nav}>
        <div className={styles.logo}>
            <Link  to={`${mainUrl}/`}>Logo</Link>
        </div>

        <ul className={styles.menuList}>
            <li>
            <NavLink to={`${mainUrl}`}>Home</NavLink>
            </li>
            <li>
            <NavLink to={`${mainUrl}/store`}>Store</NavLink>
            </li>
            <li>
            <NavLink to={`${mainUrl}/checkout`}>Checkout</NavLink>
            </li>
        </ul>
    </nav>)
}

export default Header;
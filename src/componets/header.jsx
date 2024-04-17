import style from "../styles/header.module.css"
import { Link } from "react-router-dom";
export default function header() {
    return (
        <ul className={style.header}>
            <Link to="/"  className="my-link"> HOME  </Link>
            <Link to="/product"  className="my-link"> Products</Link>
            <Link to="/shop"  className="my-link"> Shop </Link>
            <Link to="/aboutus"  className="my-link"> About us</Link>
        </ul>
    )
}
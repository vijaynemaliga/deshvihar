import style from "../styles/header.module.css"
export default function header() {
    return (
        <ul className={style.header}>
            <li> HOME </li>
            <li> Products</li>
            <li> Shop </li>
            <li> About us</li>
        </ul>
    )
}
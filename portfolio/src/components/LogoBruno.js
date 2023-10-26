import styles from "./css/LogoBruno.module.css";
import logo from "../img/logo.svg";
import logoWhite from "../img/logo-white.svg";

function LogoBruno({ blackLogo = false, alt }) {
    return <img className={styles.logo} src={blackLogo ? logo : logoWhite} alt={alt} />;
}

export default LogoBruno;

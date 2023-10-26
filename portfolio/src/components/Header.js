import styles from "./css/Header.module.css";
import LogoBruno from "./LogoBruno";

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <LogoBruno blackLogo={false} alt="Bruno Rocha" />
                <p>Professor, musico, tecladista e integrante da banda de rock <i>Capitania</i></p>
            </div>
            <div className={styles.vacuo}></div>
            <div className={styles.cloud}></div>
        </header>
    );
}

export default Header;

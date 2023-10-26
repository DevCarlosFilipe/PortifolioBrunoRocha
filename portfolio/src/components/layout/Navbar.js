import LogoBruno from "../LogoBruno";
import styles from "./css/Navbar.module.css";
import Container from "../Container"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Container>
                <LogoBruno blackLogo={false} alt="Logo" />
                <ul>
                    <li>Inicio</li>
                    <li>Sobre mim</li>
                    <li>Contato</li>
                </ul>
            </Container>
        </div>
    );
}

export default Navbar;

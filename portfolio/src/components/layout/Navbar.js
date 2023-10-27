import LogoBruno from "../LogoBruno";
import styles from "./css/Navbar.module.css";
import Container from "./Container"

function Navbar() {
    //<LogoBruno blackLogo={false} alt="Logo" />
    return (
        <div className={`${styles.navbar}`}>
            <Container>
                <div></div>
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

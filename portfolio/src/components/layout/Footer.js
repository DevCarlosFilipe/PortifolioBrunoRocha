import Container from "./Container";
import styles from "./css/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <p>2023 &copy; Copyright</p>
            </Container>
        </footer>
    );
}

export default Footer;

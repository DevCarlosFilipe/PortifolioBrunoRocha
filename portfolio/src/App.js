import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Container customClass="column">
                <br />
                <br />
                <br />
                <h1>Página em desenvolvimento</h1>
                <p>Volte mais tarde :)</p>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos consequatur ab saepe at quisquam rem excepturi quasi
                sequi molestias. Eos molestias iusto, nisi repudiandae quidem
                fugiat nobis distinctio dolores ducimus.
            </Container>
            <Footer />
        </div>
    );
}

export default App;

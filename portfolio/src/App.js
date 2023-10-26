import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <div className="teste_container"></div>
            <Footer />
        </div>
    );
}

export default App;

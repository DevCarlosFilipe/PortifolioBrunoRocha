import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Esse projeto será um portifólio para Bruno Rocha feito em ReactJS.
                </p>
                <p>Volte outra hora :)</p>
            </header>
        </div>
    );
}

export default App;


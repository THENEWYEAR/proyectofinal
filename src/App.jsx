import './App.css'
import Navbar from "./assets/components/navbar/navbar.jsx";
import Body from "./assets/components/body/body.jsx";
import Footer from "./assets/components/Footer/footer.jsx";
import Titulos from "./assets/components/titulos/titulos.jsx";

function App() {
    return (
        <div>
            <Titulos/>
            <h1>Componentes en ofertas</h1>
            <p>COMPRAS</p>
            <Body/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default App

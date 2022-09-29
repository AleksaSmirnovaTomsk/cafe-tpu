import './App.css';
import Header from './components/header/Header';
import Modal from './components/carousel/Carousel';
import Navigator from './components/navigator/Navigator';
import Description from './components/description/Description';
import Record from './components/record/Record';
import Maps from './components/maps/Maps';
import Footer from './components/footer/Footer';

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <Header/>
        </header>
        <main>
            <Modal/>
            <Navigator/>
            <Description/>
            <Record/>
            <Maps/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default App;

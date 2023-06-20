import Webroutes from './Components/Webroutes';
import './App.css'
import MainHeader from './Components/MainHeader/MainHeader'
import Footer from './Components/Footer/Footer';
import classes from './Components/assets/css/fw.module.css';

function App() {
    return ( 
        <>
            <MainHeader />
            <main className = { classes['mainSection'] } >
            <Webroutes />
            </main> 
            <Footer />
        </>
    );
}

export default App;
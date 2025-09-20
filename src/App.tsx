import styles from "./App.module.css";
import Header from "./components/Header";
import Blurb from "./components/Blurb";
import prophoto from "./assets/ProfessionalPhoto.jpg";

function App() {
    return (
        <div className={styles.mainApp}>
            <Header />
            <div className={styles.blurbImgWrapper}>
                <Blurb />
                <img src={prophoto} alt="profeshhhinahlll" />
            </div>
            <Header />
        </div>
    );
}

export default App;

import {Post} from "./Post";
import { Header } from "./components/Header";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";


function App() {
  return <div>
  <Header/>
  <div className={styles.wrapper}>
    <Sidebar/>
    <main>
    <Post author="Mariana" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam maiores architecto est facere molestias, fuga rem nisi quibusdam assumenda saepe molestiae modi natus facilis! Placeat asperiores delectus quaerat ea ex?l"/>
    <Post author="Flávia" content="Um post legal"/>

    </main>
  </div>
  </div>;
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import data from './components/data';

function App() {
  return (
    <>
      <NavBar/>

      <ItemListContainer/>
    </>
  );
}

export default App;

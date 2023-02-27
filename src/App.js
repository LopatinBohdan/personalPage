import logo from './logo.svg';
import './App.css';
import Person from './components/person-info';
import CityInfo from './components/city';




function App() {
  const arr=[{id:1, name:"name1"}, {id:2, name:"name2"}];
  return (
    <>
      {/* <Person></Person> */}
      <CityInfo data={arr}></CityInfo>
    </>
  )
}

export default App;

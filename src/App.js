import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Data from './data'
function App() {
  const newArray = Data.map((item)=>{
    return(
    <Card
      key={item.id}
      item={item}
    />)
  })
  return (
    <div className="App">
      <Navbar/>
      <div className='card--list'>
        {newArray}
      </div>
    </div>
  );
}

export default App;

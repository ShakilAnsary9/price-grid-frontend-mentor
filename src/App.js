import './App.css';
import About from './component/About';
import Price from './component/Price';
import Toptext from './component/Toptext';

function App() {
  return (
    <div className="App">
      <div className='box-shadow'>
        <Toptext />
        <div className='cardflex'>
          <Price />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;

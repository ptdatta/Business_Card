import logo from './logo.svg';
import './App.css';
import profile from './components/profile.jpg'
import Footer from './footer';
import Main from './main';
import Basic from './basic';
import reactimg from './components/react.png';

function App() {
  return (
    <div className="App">
      <img src={reactimg}/>
      <div className='container'>
       <img src={profile} alt="" width="253.6px" height="253.6px"/>
       <Basic/>
       <Main/>
       <Footer/>
      </div>
    </div>
  );
}

export default App;

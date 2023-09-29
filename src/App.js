import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Button from './component/Button';
import Title from './component/Title';
import Footer from './component/Footer';

function App() {
  return (
  <>
    <div style={{
    backgroundImage: "url(https://i.pinimg.com/originals/c2/e9/02/c2e902e031e1d9d932411dd0b8ab5eef.jpg)",
    height: "500px"
  }}>
      <div>
        <Header/>
      </div>
      <div>
        <Content/>
      </div>
      <div>
        <Button/>
      </div>
    </div>
    <div>
        <Title/>
    </div>
    <div>
      <Footer/>
    </div>
  </>
  
  );
}

export default App;

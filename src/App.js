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
    <div className='background'> 
        <Header/>
        <Content/>
        <Button/>
    </div>
    <Title/>
    <Footer/>
  </>
  
  );
}

export default App;

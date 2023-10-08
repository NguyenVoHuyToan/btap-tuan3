import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header";
import Button from "./component/Button";
import Title from "./component/title/Title";
import Footer from "./component/footer/Footer";
import Content from "./component/content/Content";

function App() {
  return (
    <>
      <div className="background">
        <Header />
        <Content />
        <Button />
      </div>
      <Title />
      <Footer />
    </>
  );
}

export default App;

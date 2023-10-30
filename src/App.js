import "./App.css";
import Button from "./component/Button";
import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Title from "./component/title/Title";

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

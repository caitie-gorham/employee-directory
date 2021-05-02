import './index.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wrapper>
        <Home></Home>
      </Wrapper>
      <Footer></Footer>
    </div>
  );
}

export default App;

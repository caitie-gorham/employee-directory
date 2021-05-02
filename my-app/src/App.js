import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header/";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

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

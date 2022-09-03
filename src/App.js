
import Header from "./components/Header";
import "./style/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "./components/Img";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Img />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;

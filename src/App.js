
import Header from "./components/Header";
import "./style/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "./components/Img";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  return (
    <div className="App">
      <Header />
      <Img />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;

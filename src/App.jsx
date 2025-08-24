// App.js
import Navbar from "./Components/Navbar/Navbar.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import Headers from "./Components/Headers/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Card from "./Components/Card/ProductList.jsx";


function App() {
  return (
    <div className="border border-black ">
      <Headers/>
      <Navbar />
      <Banner/>
      <Card/>
      <Footer />
    </div>
  );
}

export default App;

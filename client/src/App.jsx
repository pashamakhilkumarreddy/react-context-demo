import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Routes from "./routes";

const App = () => {
  return [
    <Header key="header" />,
    <main key="main" className="container mt-3">
      <Routes />
    </main>,
    <Footer key="footer" />,
  ];
};

export default App;

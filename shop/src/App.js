import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./component/LoginForm";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Card /> */}
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;

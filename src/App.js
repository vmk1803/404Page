import { Page404 } from "./components/404Page/404page";
import { Navbar } from "./components/NavBar/navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Page404 />
    </div>
  );
}

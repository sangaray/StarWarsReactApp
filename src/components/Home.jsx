import "./NavBar.css";
import "./Home.css";
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import List from "./List.jsx";

export default function Home() {
  return (
    <div className="home">
      <h1>StarWars App Home</h1>
      <NavBar />
      <Cards />
      <div className="list">
        <List />
      </div>
    </div>
  );
}

import Search from "./Search";
import Random from "./Random";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <Search />
      <Random />
      <button>All Characters</button>
      <Search />
      <Random />
    </div>
  );
}

import Search from "./Search";
import Random from "./Random";
import "./NavBar.css";

export default function NavBar({ search, addList, random }) {
  return (
    <div className="navBar">
      <Search search={search} cardLocation="left" />
      <Random random={random} cardLocation="left" />
      <button className="button" onClick={addList}>
        ALL CHARACTERS
      </button>
      <Random random={random} cardLocation="right" />
      <Search search={search} cardLocation="right" />
    </div>
  );
}

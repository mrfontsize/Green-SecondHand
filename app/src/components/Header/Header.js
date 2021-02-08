import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <Link to={"/"}>
          <h1>Green Seconhand</h1>
        </Link>
        <div className="links">
          <Link to={"/SellItem"}>Lägg in annons</Link>
          <Link to={""}>Favoriter</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
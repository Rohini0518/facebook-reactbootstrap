import { Link } from "react-router-dom";

function NavBarSection() {
  const navBarlist = [
    { title: "Timeline", link: "home" },
    { title: "About", link: "about" },
    { title: "Friends", link: "friends" },
    { title: "Images", link: "images" },
  ];
  return (
    <div className="navbar-section">
      {navBarlist.map((navItem, index) => (
        <Link to={navItem.link} key={index} className="nav-link">
          {navItem.title}
        </Link>
      ))}
    </div>
  );
}

export default NavBarSection;

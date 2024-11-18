import { Button, Image } from "react-bootstrap";
import HarryPotter from "./assets/HarryPotter.png";
import NavBarSection from "./NavBarSection";

function Header() {
  return (
    <div className="Banner-container">
      <div>
        <Image src={HarryPotter} roundedCircle className="profile-image" />
        <p>Harrypotter</p>
      </div>
      <NavBarSection />
      <Button variant="primary">Edit Profile</Button>
    </div>
  );
}

export default Header;

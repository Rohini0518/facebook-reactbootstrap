import { Button, Card } from "react-bootstrap";
import HarryPotter from "./assets/HarryPotter.png";

function SocialFeed() {
  return (
    <div className="social-feed">
      <Card>
        <Card.Img variant="top" src={HarryPotter} />
        <Card.Body>
          <Card.Title>Harry Potter</Card.Title>
          <Card.Text>
            Harry Potter is the brave hero who discovers his destiny as a wizard
            while battling dark forces. he stands as a symbol of courage,
            loyalty, and the triumph of good over evil.
          </Card.Text>
          <Button variant="primary">Send Request</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SocialFeed;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../Assets/image1.jpg";
const user = {
  name: "Kassandra",
  age: 36,
  address: "123 NY",
};

function Card1() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          my name is {user.name} i am {user.age} i live in {user.address}
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;

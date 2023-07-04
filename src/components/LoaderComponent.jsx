import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

export const LoaderComponent = () => {
  return (
    <Container>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xl={3} />
      </Placeholder>
      <br />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </Container>
  );
};

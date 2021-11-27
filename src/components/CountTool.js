import { Button } from "reactstrap";
import {
  decrementCounter,
  incrementCounter,
} from "../redux/actions/counterActions";
import { connect } from "react-redux";

export const CounterTool = (props) => {
  return (
    <div>
      <Button
        onClick={props.incrementCounter}
        type="button"
        color="primary"
        className="me-4"
      >
        + Increment
      </Button>
      <Button onClick={props.decrementCounter} type="button" color="dark">
        - Decrement
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(null, mapDispatchToProps)(CounterTool);

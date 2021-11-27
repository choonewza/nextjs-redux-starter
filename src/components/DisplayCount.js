import { connect } from "react-redux";

const DisplayCount = (props) => {
  const { counter } = props;
  return (
    <div>
      <h2>Counter : {counter}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.value
});

export default connect(mapStateToProps)(DisplayCount);

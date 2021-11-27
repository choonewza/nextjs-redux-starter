import Head from "next/head";
import Image from "next/image";
import { Button, Container } from "reactstrap";
import CountTool from "../src/components/CountTool";
import DisplayCount from "../src/components/DisplayCount";
import { connect } from "react-redux";

function Home(props) {
  const { counter } = props;

  return (
    <div>
      <Head>
        <title>NextJS with Redux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-danger">Counter : {counter}</h1>

        <div className="mb-4">
          <DisplayCount />
        </div>

        <CountTool />
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

export default connect(mapStateToProps)(Home);

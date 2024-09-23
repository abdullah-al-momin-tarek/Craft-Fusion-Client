import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/react-flicking/dist/flicking.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Craft-Fusion | Home</title>
      </Helmet>
      <h2>Home</h2>

      <Flicking
        align="prev"
        circular={true}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        <div className="panel">1</div>
        <div className="panel">2</div>
        <div className="panel">3</div>
      </Flicking>
    </div>
  );
};

export default Home;

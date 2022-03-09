import "./Styles/BouttonPublier.css";
import axios from "axios";

const BouttonPublier = (props) => {
  const { article, collectDatas } = props;
  const sendDatas = () => {
    axios
      .post(`http://localhost:4242/articles/`, { article })
      .then((response) => console.log(response, article));
  };
  return (
    <div>
      <button
        onClick={(collectDatas, sendDatas)}
        className="button2 adminButton"
      >
        Publier l'article
      </button>
    </div>
  );
};

export default BouttonPublier;

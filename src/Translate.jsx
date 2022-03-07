import { useTranslate } from "./TranslateContext";

const Translate = () => {
  const { translate, setTranslate } = useTranslate();
  const clickHandler = () => {
    setTranslate(!translate);
  };
  return (
    <div>
      {translate ? <p>ୟୀ ଆମ ଫାଇଲିଂ ଲୁକକୟ </p> : <p>I am Feeling lucky</p>}
      <button onClick={clickHandler}>
        {translate ? "Translate to English" : "Translate to Odia"}
      </button>
    </div>
  );
};

export default Translate;

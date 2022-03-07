import { useMode } from "./ModeContext";

const Nav = () => {
  const { mode, setMode } = useMode();
  const clickHandler = () => setMode((mode) => !mode);
  return <button onClick={clickHandler}>{mode ? "Dark" : "light"}</button>;
};

export default Nav;

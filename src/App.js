import Button1 from "./component/Button.js";
import icon from "./component/local-grocery-store.svg";

function App() {
  return (
    <>
      <Button1>Default</Button1>

      <Button1 className="custom-button">Default</Button1>

      <Button1 className="nooutline-button">Default</Button1>

      <Button1 className="dark-button">Default</Button1>

      <Button1 className="disable-button">Disabled</Button1>

      <Button1 className="disable2-button">Disabled</Button1>

      <Button1 className="iconleft-button">
        <img src={icon} alt="icon" />
        Default
      </Button1>

      <Button1 className="iconright-button">
        Default
        <img src={icon} alt="icon" />
      </Button1>

      <Button1 className="small-button">Default</Button1>

      <Button1 className="medium-button">Default</Button1>

      <Button1 className="large-button">Default</Button1>

      <Button1 className="color1-button">Default</Button1>

      <Button1 className="color2-button">Default</Button1>

      <Button1 className="color3-button">secondary</Button1>

      <Button1 className="color4-button">Danger</Button1>
    </>
  );
}

export default App;

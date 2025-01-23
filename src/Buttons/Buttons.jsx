import Button from "./Button";
import HomeIcon from "./HomeIcon";
import PlusIcon from "./PlusIcon";
import Section from "./Section";
import "./Buttons.css";

function Buttons() {
  return (
    <div id="app">
      <Section text="Filled Button (Default)">
        <Button>Default</Button>
        <Button mode="filled">Filled (Default)</Button>
      </Section>
      <Section text="Button with Outline">
        <Button mode="outline">Outline</Button>
      </Section>
      <Section text="Text-only Button">
        <Button mode="text">Text</Button>
      </Section>
      <Section text="Button with Icon">
        <Button Icon={HomeIcon}>Home</Button>
        <Button Icon={PlusIcon} mode="text">
          Add
        </Button>
      </Section>
      <Section text="Buttons Should Support Any Props">
        <Button mode="filled" disabled>
          Disabled
        </Button>
        <Button onClick={() => console.log("Clicked!")}>Click me</Button>
      </Section>
    </div>
  );
}

export default Buttons;

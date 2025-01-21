import Input from "./Input";
import './input.css'

const InputForm = () => {
    return (
        <div id="content">
          <Input type="text" placeholder="Your name" />
          <Input richText placeholder="Your message" />
        </div>
      );
}

export default InputForm;
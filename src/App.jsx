import Cards from "./Card/Cards";
import Discount from "./Discount";
import Login from "./Login/Login";
import ConfirmationDialog from "./ConfirmationDialog/ConfirmationDialog";
import { useState } from "react";
import TabButton from "./TabButton";
import TodoList from "./TODO/TodoList";
import InputForm from "./Input/InputForm";
import Buttons from "./Buttons/Buttons";


const App = () => {
  const apps = {
    login: {
      name: "Login",
      app: <Login />,
    },
    cards: { name: "Cards", app: <Cards /> },
    discount: { name: "Discount", app: <Discount /> },
    confirmation: { name: "Confirmation Dialog", app: <ConfirmationDialog /> },
    todo: { name: "TODO list", app: <TodoList/> },
    input: { name: "Input Form", app: <InputForm/>},
    buttons: { name: "Buttons", app: <Buttons/>}
  }; 

   

  let [selectedAppKey, setSelectedAppKey] = useState();

  const handleSelect = (appKey) => {
    setSelectedAppKey(appKey);
  };


  return (
    <div>
      <menu>
        {Object.keys(
          apps).map((appKey) => (
            <TabButton key={appKey} onSelect={() => handleSelect(appKey)}>
              {apps[appKey].name}
            </TabButton>
          ))
        }
      </menu>
      {selectedAppKey ?  apps[selectedAppKey].app : <div>Please select app</div>}
    </div>
  );
};

export default App;

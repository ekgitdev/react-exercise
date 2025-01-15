import { useState } from "react";
import "./ConfirmationDialog.css";


export default function ConfirmationDialog() {
  const [showDialog, setShowDialog] = useState(false);

  
  return (
    <div className="dialog">
    {showDialog && <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={()=>setShowDialog(false)}>Proceed</button>
      </div>}
      <button  onClick={() => setShowDialog(true)}>Delete</button>
    </div>
  );
}

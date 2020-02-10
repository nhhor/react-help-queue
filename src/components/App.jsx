import React from "react";
import TicketList from "./TicketList";
import ToDoApp from "./Header";
import MyStyledComponent from "./MyStyledComponent";

function App(){
  return (
    <div>
      <ToDoApp/>
      <TicketList/>
      <MyStyledComponent/>
    </div>
  );
}

export default App;

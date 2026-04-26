import { useState } from "react";
import Index from "./pages/Index";
import "./pages/style.css";
import Tasks from "./pages/Tasks";

function App() {
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      message: "Eat breakfast",
      time: "9:00",
      date: "27/04/2026",
    },
  ]);

  return (
    <>
      <Index
        messageList={messageList}
        setMessageList={setMessageList}
      />
      <Tasks MessageList={messageList} />
    </>
  );
}

export default App;

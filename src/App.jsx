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
      date: "2026-04-07",
    },
    {
      id: 2,
      message: "Eat lunch",
      time: "12:00",
      date: "2026-04-07",
    },
  ]);
  

  return (
    <>
      <Index messageList={messageList} setMessageList={setMessageList} />
      <Tasks messageList={messageList} setMessageList={setMessageList}  />
    </>
  );
}

export default App;

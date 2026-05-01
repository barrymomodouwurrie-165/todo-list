import { useEffect, useState } from "react";
import Index from "./pages/Index";
import "./pages/style.css";
import Tasks from "./pages/Tasks";

function App() {
  const [messageList, setMessageList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(messageList));
  }, [messageList]);

  return (
    <>
      <Index messageList={messageList} setMessageList={setMessageList} />
      <Tasks messageList={messageList} setMessageList={setMessageList} />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Index from "./pages/Index";
import "./pages/style.css";
import Tasks from "./pages/Tasks";
import axios from "axios";

function App() {
  const [messageList, setMessageList] = useState([]);

  const getTasks = async () => {
    const response = await axios.get("http://localhost:4000/api/tasks");
    setMessageList(response.data);
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Index getTasks={getTasks} />
      <Tasks messageList={messageList} setMessageList={setMessageList} getTasks={getTasks} />
    </>
  );
}

export default App;

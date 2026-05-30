import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

const Index = ({getTasks}) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const TextChange = (e) => {
    setMessage(e.target.value);
  };
  const TimeChange = (e) => {
    setTime(e.target.value);
  };
  const DateChange = (e) => {
    setDate(e.target.value);
  };
  const SendButton = async () => {
    if (message == "" || time == "" || date == "") {
      window.alert("Fill all inputs");
    }
    const createdTime = dayjs().format("MMMM D, YYYY  HH:mm A");
    try {
      await axios.post("http://localhost:4000/api/tasks", {
        task: message,
        time,
        date,
        createdTime,
      });
      setMessage("");
      setTime("");
      setDate("");
      getTasks()
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="input-container">
      <h1>A TO-DO LIST</h1>
      <input
        className="input"
        type="text"
        placeholder="Type a to-do"
        onChange={TextChange}
        value={message}
      />
      <input
        className="time-input"
        type="time"
        onChange={TimeChange}
        value={time}
      />
      <input
        className="date-input"
        type="date"
        onChange={DateChange}
        value={date}
      />
      <button className="save-button" onClick={SendButton}>
        Add Task
      </button>
    </div>
  );
};

export default Index;

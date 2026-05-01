import { useState } from "react";
import dayjs from "dayjs";

const Index = ({ messageList, setMessageList }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
   const [message, setMessage] = useState("");
  const SendButton = () => {
    if (message == "" || time == "" || date == "") {
      window.alert("Fill all inputs");
    } else {
     const addedDay = dayjs().format("YYYY-MM-DD HH:mm");
      setMessageList([
        ...messageList,
        {
          id: crypto.randomUUID(),
          addedDay: addedDay,
          message: message,
          time: time,
          date: date,
        },
      ]);
      setMessage("");
      setTime("")
      setDate("")
    }
    
  };
  const TextChange = (e) => {
    setMessage(e.target.value);
  };
  const TimeChange = (e) => {
    setTime(e.target.value);
  };
  const DateChange = (e) => {
    setDate(e.target.value);
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
      <input className="time-input" type="time"  onChange={TimeChange} value={time} />
      <input className="date-input" type="date"  onChange={DateChange} value={date} />
      <button className="save-button" onClick={SendButton}>
        Add Task
      </button>
    </div>
  );
};

export default Index;

import { useState } from "react";

const Index = ({ messageList, setMessageList }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
   const [message, setMessage] = useState("");
  const SendButton = () => {
    setMessageList([
      ...messageList,
      {
        id: crypto.randomUUID,
        message: message,
        time: time,
        date: date,
      },
    ]);
    setMessage("");
    console.log(messageList);
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
      <input type="datetime" name="" id="" onChange={TimeChange} value={time} />
      <input type="date" name="" id="" onChange={DateChange} value={date} />
      <button className="save-button" onClick={SendButton}>
        Save
      </button>
    </div>
  );
};

export default Index;

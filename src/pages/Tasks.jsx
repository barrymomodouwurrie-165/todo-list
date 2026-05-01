import { Fragment } from "react";
import markPic  from "../assets/mark-round.jpg"

const Tasks = ({ messageList, setMessageList }) => {
  const DeleteTask = (id) => {
    const taskId = messageList.filter((task) => task.id !== id);
    setMessageList(taskId);
  };
  return (
    <Fragment>
      {messageList &&
        messageList.map((item) => {
          return (
            <div className="message-container" key={item.id}>
              <div className="mark-day-container">
                <img src={markPic} alt="" className="mark-img" />
                {item.addedDay}
              </div>
              <p className="para1">Task: {item.message}</p>
              <p className="para2">Date: {item.date}</p>
              <p className="para2">Time: {item.time}</p>
              <button
                className="delete-button"
                onClick={() => DeleteTask(item.id)}
              >
                Delete Task
              </button>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Tasks;

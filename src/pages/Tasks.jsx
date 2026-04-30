import { Fragment } from "react";

const Tasks = ({ messageList, setMessageList }) => {
  const DeleteTask = (id) => {
    const taskId = messageList.filter((task) => task.id !== id);
    setMessageList(taskId)
  };
  return (
    <Fragment>
      {messageList &&
        messageList.map((item) => {
          return (
            <div className="message-container" key={item.id}>
              <p className="para1">{item.message}</p>
              <p className="para2">
                {item.date} at {item.time}
              </p>
              <button className="update-button">Update</button>
              <button
                className="delete-button"
                onClick={()=>DeleteTask(item.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Tasks;

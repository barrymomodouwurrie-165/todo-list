import { Fragment } from "react";

const Tasks = ({ messageList }) => {
  return (
    <Fragment>
      {messageList &&
        messageList.map((item) => {
          return (
            <div className="message-container" key={item.id}>
              <p className="para1">{item.message}</p>
              <p className="para2">
                {item.date} {item.time}
              </p>
              <button className="update-button">Update</button>
              <button className="delete-button">Delete</button>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Tasks;

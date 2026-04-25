
export const Messages = () => {
  return (
    <div className="message-container">
      <p className="para1">Eat breakfast, then go to work</p>
      <p className="para2">2026-04-24 9:00 AM</p>
      <button className="update-button">Update</button>
      <button className="delete-button">Delete</button>
    </div>
  );
};

const Index = () => {
  return (
    <div className="input-container">
      <h1>A TO-DO LIST</h1>
      <input className="input" type="text" />
      <button className="save-button">Save</button>
    </div>
  );
};

export default Index;

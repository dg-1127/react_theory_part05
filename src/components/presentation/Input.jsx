const Input = ({ change }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "8px 5px",
        width: "fit-content",
      }}
    >
      <input
        onChange={(e) => change(e)}
        style={{ border: "none" }}
        type="text"
      />
    </div>
  );
};

export default Input;

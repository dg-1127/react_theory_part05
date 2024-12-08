const Company = ({ name, email }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
};

export default Company;

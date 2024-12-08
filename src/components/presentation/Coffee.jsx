const Coffee = ({ image, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100px", height: "100px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Coffee;

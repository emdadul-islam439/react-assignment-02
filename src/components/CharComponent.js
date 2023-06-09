const charComponent = (props) => {
  const styles = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    // This answer saved a lot of my time: https://stackoverflow.com/a/64418665/14552446
    <div onClick={() => props.onClick(props.idx)} style={styles}>
      {props.characterToShow}
    </div>
  );
};

export default charComponent;

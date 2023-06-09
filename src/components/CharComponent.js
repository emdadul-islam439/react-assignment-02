const charComponent = (props) => {
  const styles = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <div onClick={props.onClick(props.idx)} style={styles}>
      {props.characterToShow}
    </div>
  );
};

export default charComponent;

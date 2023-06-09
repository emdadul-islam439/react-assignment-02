const validationComponent = (props) => {
  return (
    <div>
      {props.inputLength <= 5 ? <p>Status: Text too short</p> : <p>Status: Text long enough</p>}
    </div>
  );
};

export default validationComponent;

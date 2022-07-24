const MyParagraph = (props) => {
  console.log("MyParagraph IS RUNNING");
  return <p>{props.children}</p>;
};

export default MyParagraph;

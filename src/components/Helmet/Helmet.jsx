const Helmet = (props) => {
  document.title = "Mebel Shop - " + props.title;

  return <main className="w-100">{props.children}</main>;
};

export default Helmet;

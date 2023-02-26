const Helmet = (props) => {
  document.title = "Ecommerce - " + props.title;

  return <main className="w-100">{props.children}</main>;
};

export default Helmet;

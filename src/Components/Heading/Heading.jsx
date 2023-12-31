const Heading = ({ children, as }) => {
  if (as === "h1") {
    return <h1 className="h1">{children}</h1>;
  }
  if (as === "h2") {
    return <h2 className="h2">{children}</h2>;
  }
  if (as === "h3") {
    return <h3 className="h3">{children}</h3>;
  }
  if (as === "h4") {
    return <h4 className="h4">{children}</h4>;
  }
  if (as === "h5") {
    return <h5 className="h5">{children}</h5>;
  }
  if (as === "h6") {
    return <h6 className="h6">{children}</h6>;
  }
  return <h1 className="h1">{children}</h1>;
};
export default Heading;

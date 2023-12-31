import "./Form.css";

const Form = ({ children, handleSubmit }) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;

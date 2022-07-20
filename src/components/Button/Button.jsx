export const Button = ({name, onSubmit}) => {
  return (
    <button className="" type="Submit" name={name} onSubmit={onSubmit}>
      {name}
    </button>
  );
};

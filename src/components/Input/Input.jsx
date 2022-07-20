export const Input = ({pattern, name, onInput }) => {
  return (
    <label htmlFor="Name">{name}
      <input
      id="Name"
        type="text"
        name={name}
        pattern={pattern&&pattern}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onInput={onInput}
      />
    </label>
  );
};

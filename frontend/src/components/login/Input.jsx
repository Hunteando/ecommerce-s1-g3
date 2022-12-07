export const Input = ({
  name,
  type,
  placeholder,
  autoComplete,
  onChange,
  onBlur,
  value,
  errors,
}) => {
  //inputs__login
  const className = () => {
    if (errors[name] === undefined || errors[name] === true) {
      return "inputs__login";
    }
    return "input_error";
  };

  return (
    <>
      <input
        name={name}
        className={className()}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        errors={errors}
      />
      {errors[name] === undefined || errors[name] === true ? null : (
        <>
          <p>{errors[name]}</p>
        </>
      )}
    </>
  );
};

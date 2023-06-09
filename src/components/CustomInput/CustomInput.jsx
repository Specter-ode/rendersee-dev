import s from './CustomInput.module.css';

const CustomInput = ({
  marginBottom = 0,
  name,
  value,
  type = 'text',
  required = true,
  placeholder,
  min,
  max,
  handleChange,
  handleBlur,
  label,
  error,
  pattern,
  title,
  icon
}) => {
  return (
    <div className={s.inputBlock} style={{ marginBottom }}>
      <input
        id={name}
        className={s.input}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        type={type}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        style={{padding: icon ? '11px 39px 11px 23px' : '11px 23px'}}
      />
      {icon}
      {label && (
        <label htmlFor={name} className={s.label}>
          {label}
        </label>
      )}
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};

export default CustomInput;

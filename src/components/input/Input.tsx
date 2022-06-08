import './input.scss';

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  label: string;
  onChange?: (e) => any;
}

export const Input = (props: InputProps) => {
  const { placeholder, type, label } = props;
  return (
    label? 
    <div className="form-control">
      <label> {label}</label>
      <input type={type} placeholder={placeholder} {...props} />
    </div>
    :
    <div className="form-group">
      <input type={type} placeholder={placeholder} {...props} style={{ width: "13%" }} />
    </div>
  )
}



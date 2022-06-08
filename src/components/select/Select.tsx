import './select.scss';

interface SelectProps {
  defaultOption: string;
  name: string;
  value: string;
  option: any,
  onChange?: (e) => any;
}

export const Select = (props: SelectProps) => {
  const { defaultOption, option } = props;
  return (
    <div className="form-group">
      <select style={{ width: "15%" }}>
        <option selected disabled hidden>{defaultOption}</option>
        {option.map((item) => {
          return (
            <option value={item.id}>{item.value}</option>
          )
        })}
      </select>
    </div>
  )
}



import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const { type, placeholder,defaultValue, name, h, w="w-full",onChange=()=>{} } = props;
    return (
      <input
        type={type}
        className={` text-sm border rounded-md ${h} ${w} py-2 px-3 text-black `}
        name={name}
        id={name}
        ref={ref}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    );
  });
  Input.propTypes={
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    h: PropTypes.string,
    w: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.node,
}
Input.displayName = "Input"
export default Input

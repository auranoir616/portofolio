import Input from "./Input";
import Label from "./Label";
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const FormComponent =forwardRef((props, ref) =>{
    const {htmlFor, type, name,defaultValue,h, id, placeholder, children,onChange=()=>{}} = props
    return(
        <div className="mt-3 p-1 text-white w-full">
            <Label htmlFor={htmlFor}>{children}</Label>
            <Input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} ref={ref} defaultValue={defaultValue} h={h}/>
        </div>
    )
})

export const FormComponentTextArea = forwardRef((props, ref) =>{
    const {htmlFor, type, name, id, children,} = props
    return(
        <div className="mt-3 p-1">
            <Label htmlFor={htmlFor}>{children}</Label>
            <textarea rows="5" type={type} name={name} id={id} className="rounded-sm w-full"></textarea>
        </div>
    )
})

FormComponent.propTypes={
    type: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    htmlFor: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.node,
}
FormComponent.displayName = "FormComponent"

// export default FormComponent;
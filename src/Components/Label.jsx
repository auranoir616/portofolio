import PropTypes from 'prop-types';
const Label = (props) =>{
    const {htmlFor, children} = props
    return(
        <label htmlFor={htmlFor} className="text-white block text-lg font-bold mb-2 ">
        {children}
      </label>
    )
}
Label.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.string 
}
export default Label;  
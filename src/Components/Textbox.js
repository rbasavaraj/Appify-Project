import PropTypes from 'prop-types';

const Textbox = ({ id, type, label, onChange, length }) => {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <input id={id} type={type} className='form-control' onChange={onChange} maxLength={length}></input>
        </div>
    )
}

Textbox.defaultProps = {
    length: 50,
}
Textbox.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    //length: PropTypes.number,
}

export default Textbox

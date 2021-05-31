import PropTypes from 'prop-types';

const Textarea = ({ id, label, onChange }) => {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <textarea id={id} className='form-control' onChange={onChange}></textarea>
        </div>
    )
}

Textarea.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
}

export default Textarea

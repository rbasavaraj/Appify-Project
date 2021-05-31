import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    return (
        <button className='btn btn-primary form-control' onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Default',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button

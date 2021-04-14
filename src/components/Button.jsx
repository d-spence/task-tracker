import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: color }}
      className="btn">
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'button',
  color: 'CadetBlue',
  onClick: (e) => console.log(e),
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button

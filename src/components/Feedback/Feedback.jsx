import PropTypes from 'prop-types';
import css from './Feedback.module.css';

function Feedback({ options, onFeedback }) {
  return options.map(option => (
    <button
      type="button"
      className={css.btn}
      key={option}
      onClick={() => onFeedback(option)}
    >
      {option}
    </button>
  ));
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onFeedback: PropTypes.func.isRequired,
};

export default Feedback;

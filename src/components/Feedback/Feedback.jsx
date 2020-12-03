import PropTypes from 'prop-types';
import s from './Feedback.module.css';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
  getNameFeedback,
}) {
  const namesResponse = Object.keys(options);
  return (
    <ul className={s.list}>
      {namesResponse.map(item => (
        <li key={item}>
          <button onClick={() => onLeaveFeedback(item)} className={s.button}>
            {getNameFeedback(item)}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  getNameFeedback: PropTypes.func.isRequired,
};

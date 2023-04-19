import { firstLetterUp } from '../../utils';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" data-key={option} onClick={e => onClick(e)}>
              {firstLetterUp(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

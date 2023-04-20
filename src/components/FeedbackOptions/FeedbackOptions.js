import { firstLetterUp } from '../../utils';
import PropTypes from 'prop-types';
import { Button, OptionsList } from './FeedbackOptions.styles';

export const FeedbackOptions = ({ options, onClick, positiveOption }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button
              type="button"
              data-key={option}
              data-status={option === positiveOption}
              onClick={e => onClick(e)}
            >
              {firstLetterUp(option)}
            </Button>
          </li>
        );
      })}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  positiveOption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

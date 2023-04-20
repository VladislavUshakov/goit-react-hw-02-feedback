import PropTypes from 'prop-types';
import { List, Title } from './Statistics.styles';

export const Statistics = ({
  statisticItems,
  total,
  positivePercentage,
  isPositiveOption,
  isFeedback,
}) => {
  return (
    <div>
      <Title>Statistics</Title>
      {isFeedback ? (
        <List>
          {statisticItems}
          <li key="total">Total: {total}</li>
          {isPositiveOption && (
            <li key="positive">Positive feedback: {positivePercentage}</li>
          )}
        </List>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  statisticItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  isPositiveOption: PropTypes.bool.isRequired,
  isFeedback: PropTypes.bool.isRequired,
};

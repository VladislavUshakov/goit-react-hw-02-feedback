import PropTypes from 'prop-types';

export const Statistics = ({
  statisticItems,
  total,
  positivePercentage,
  isPositiveOption,
  isFeedback,
}) => {
  return (
    <div>
      <h3>Statistics</h3>
      {isFeedback ? (
        <ul>
          {statisticItems}
          <li key="total">Total: {total}</li>
          {isPositiveOption && (
            <li key="positive">Positive feedback: {positivePercentage}</li>
          )}
        </ul>
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

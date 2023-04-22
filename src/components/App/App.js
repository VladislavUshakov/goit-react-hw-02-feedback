import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';

import { Component } from 'react';
import { firstLetterUp } from '../../utils';
import PropTypes from 'prop-types';

export class App extends Component {
  static defaultProps = {
    options: ['good', 'neutral', 'bad'],
    positiveOption: 'good',
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    positiveOption: PropTypes.string.isRequired,
  };

  state = this.props.options.reduce((acum, option) => {
    acum[option] = 0;
    return acum;
  }, {});

  onSetFeedback = e => {
    const { key } = e.currentTarget.dataset;

    this.setState(prevState => {
      const prevKey = prevState[key];
      return {
        ...prevState,
        [key]: prevKey + 1,
      };
    });

    e.currentTarget.blur();
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, num) => (total += num), 0);

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.state[this.props.positiveOption];

    return `${Math.round((positiveFeedback / totalFeedback) * 100)}%`;
  };

  makeStatisticItems = () =>
    Object.entries(this.state).map(item => {
      return (
        <li key={item[0]}>
          {firstLetterUp(item[0])}: {item[1]}
        </li>
      );
    });

  isPositiveOption = () => {
    const { options, positiveOption } = this.props;
    return options.includes(positiveOption);
  };

  isFeedback = () => this.countTotalFeedback() > 0;

  render() {
    const { options, positiveOption } = this.props;
    const statisticItems = this.makeStatisticItems();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          positiveOption={positiveOption}
          onClick={this.onSetFeedback}
        />
        <Statistics
          statisticItems={statisticItems}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          isFeedback={this.isFeedback()}
          isPositiveOption={this.isPositiveOption()}
        />
      </Section>
    );
  }
}

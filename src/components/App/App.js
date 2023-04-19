import { Component } from 'react';
import { firstLetterUp } from '../../utils';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';

export class App extends Component {
  static defaultProps = {
    options: ['good', 'neutral', 'bad'],
    positiveOption: 'good',
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
    const { options } = this.props;
    const { positiveOption } = this.props;
    return options.includes(positiveOption);
  };

  isFeedback = () => this.countTotalFeedback() > 0;

  render() {
    const { options } = this.props;
    const statisticItems = this.makeStatisticItems();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onClick={this.onSetFeedback} />
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

import { useState } from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { NotificationFB } from '../NotificationFB/NotificationFB';

import scn from '../SectionFeedback/SectionFeedBack.module.css';

export const SectionFeedBack = parameters => {
  // create hook whith 'key' variable for change 'Statistics' to 'FeedbackOptions'
  const [lock, setLock] = useState(false);

  const { good, neutral, bad } = parameters.dataState;

  // counting the amount of feedback
  const countTotalFeedback = () => good + neutral + bad;

  // counting the percent of 'good' feedback
  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback()) || 0;

  return (
    <section className={scn.section}>
      <p className={scn.title}>{parameters.title}</p>

      <FeedbackOptions
        options={parameters.options}
        onLeaveFeedback={setLock}
        optionsName={parameters.dataState}
      />

      <p className={scn.title}>Statistics</p>

      {lock ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <NotificationFB message="There is no feedback" />
      )}
    </section>
  );
};

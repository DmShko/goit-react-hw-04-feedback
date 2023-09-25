import { useState } from 'react';

import { SectionFeedBack } from './components/SectionFeedback/SectionFeedBack';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <SectionFeedBack
      title="Please, leave feedback"
      options={{
        setGood,
        setNeutral,
        setBad,
      }}
      dataState={{
        good,
        neutral,
        bad,
      }}
    />
  );
};

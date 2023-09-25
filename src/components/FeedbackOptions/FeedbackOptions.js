import opt from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = parameters => {
  const opts = Object.keys(parameters.optionsName);

  const buttonClick = evt => {
    const { name } = evt.target;

    switch (name) {
      case 'good':
        parameters.options.setGood(value => value + 1);
        parameters.onLeaveFeedback(true);
        break;
      case 'neutral':
        parameters.options.setNeutral(value => value + 1);
        parameters.onLeaveFeedback(true);
        break;
      case 'bad':
        parameters.options.setBad(value => value + 1);
        parameters.onLeaveFeedback(true);
        break;
      default:
        return;
    }
  };

  return (
    <div className={opt.buttonArea}>
      {opts.map(value => {
        return (
          <button
            type="button"
            className={opt.button}
            onClick={buttonClick}
            name={value}
            key={value}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

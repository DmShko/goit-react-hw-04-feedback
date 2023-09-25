import st from '../Statistics/Statistics.module.css';

export const Statistics = parameters => {
  // 'state' property destructuring
  const { good, neutral, bad } = parameters;

  const Total = () => parameters.total();

  const PositivPercentage = () => parameters.positivePercentage();

  return (
    <>
      <p className={st.lable}>Good: {good}</p>
      <p className={st.lable}>Neutral: {neutral}</p>
      <p className={st.lable}>Bad: {bad}</p>
      <p className={st.lable}>Total: {Total()}</p>
      <p className={st.lable}>Positive feedback: {PositivPercentage()} %</p>
    </>
  );
};

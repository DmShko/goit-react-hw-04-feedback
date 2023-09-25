import no from '../NotificationFB/NotificationFB.module.css';

export const NotificationFB = parameters => {
  return <p className={no.text}>{parameters.message}</p>;
};

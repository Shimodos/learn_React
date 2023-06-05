import { useEffect } from 'react';

function Alert(props) {
  const { alertName = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertName]);

  return (
    <div id="toast-container">
      <div className="toast">{alertName} added to basket</div>
    </div>
  );
}

export default Alert;

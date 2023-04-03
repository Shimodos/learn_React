import { useContext } from 'react';
import dataContext from './Context';

const InputComponent = (props) => {
  const context = useContext(dataContext);

  return (
    <input
      value={context.mail}
      className="form-control"
      placeholder="name@example.com"
      onFocus={context.forceChangeMail}
    />
  );
};

export default InputComponent;

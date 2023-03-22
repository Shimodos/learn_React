import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function useInputWithWalidate(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChanged = (event) => {
    setValue(event.target.value);
  };

  const validateInput = () => {
    return value.search(/\d/) >= 0;
  };

  return { value, onChanged, validateInput };
}

const Form = () => {
  const input = useInputWithWalidate('');
  const textArea = useInputWithWalidate('');

  const color = input.validateInput() ? 'text-danger' : null;
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input
            value={`${input.value} / ${textArea.value}`}
            type="text"
            className="form-control"
            readOnly
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            onChange={input.onChanged}
            type="email"
            value={input.value}
            className={`form-control ${color}`}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            onChange={textArea.onChanged}
            value={textArea.value}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
};

function App() {
  return <Form />;
}

export default App;

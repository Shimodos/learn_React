import { createContext } from 'react';

const dataContext = createContext({
  mail: 'example@example.com',
  text: 'some text',
  forceChangeMail: () => {},
});

export default dataContext;

import { Component } from 'react';
import styled from 'styled-components';

import './App.css';

<<<<<<< HEAD
const Header = () => {
  return <h2>Hello worls!</h2>;
};
=======
// const Header = () => {
//   return <h2>Hello worls!</h2>;
// };
>>>>>>> c13e541e97a66961bc331a3843a6260556ae49d8

// const Field = () => {
//     const holder = 'Enter here';
//     const styledField = {
//         width: '300px',
//     };
//     return <input placeholder={holder} type="text" style={styledField} />;
// };

// class Field extends Component {
//     render() {
//         const holder = 'Enter here';
//         const styledField = {
//             width: '300px',
//         };
//         return <input placeholder={holder} type="text" style={styledField} />;
//     }
// }

// function Btn() {
//     const text = 'Log in';
//     const logged = false;

//     return <button>{logged ? 'Enter' : text}</button>;
// }

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${(props) => (props.active ? 'orange' : 'black')};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 5px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      Text: '+++',
      position: '',
    };
  }

  nextYear = () => {
    console.log('++');
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };
<<<<<<< HEAD

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.Text}</button>
        <h1>
          My name {name} is, surname - {surname}, age - {years}, position -{' '}
          {position}
        </h1>
        <a href={link}>My profile</a>
        <forma>
          <span>Введітедолжность</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, 'some color')}
          />
        </forma>
      </div>
=======

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;

    return (
      <EmpItem active>
        <Button onClick={this.nextYear}>{this.state.Text}</Button>
        <Header>
          My name {name} is, surname - {surname}, age - {years}, position - {position}
        </Header>
        <a href={link}>My profil</a>
        <forma>
          <span>Введіте должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </forma>
      </EmpItem>
>>>>>>> c13e541e97a66961bc331a3843a6260556ae49d8
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
=======
    <Wrapper className="App">
>>>>>>> c13e541e97a66961bc331a3843a6260556ae49d8
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Demchenko" link="twitter.com" />
      {/* <StrictMode>
                <Header />
            </StrictMode> */}
      {/* <Field /> */}
      {/* <Btn /> */}
<<<<<<< HEAD
    </div>
=======
    </Wrapper>
>>>>>>> c13e541e97a66961bc331a3843a6260556ae49d8
  );
}

export { Header };
export default App;

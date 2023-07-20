import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrtapTest';

import './AppApp.css';

// const Header = () => {
//   return <h2>Hello worls!</h2>;
// };

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
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { className: 'shadow p-3 ma-3 border rounded' });
      })}
    </div>
  );
};

const HelloGreating = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <DynamicGreating color={'primary'}>
        <h2>This well was hard</h2>
      </DynamicGreating>
    </div>
  );
};

const Message = (props) => {
  return <h2>The counter is {props.counter}</h2>;
};

class Counter extends Component {
  state = {
    counter: 0,
  };

  channgeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    return (
      <>
        <button className={'btn btn-primary'} onClick={this.channgeCounter}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    );
  }
}

function AppApp() {
  return (
    <Wrapper className="AppApp">
      <Counter render={(counter) => <Message counter={counter} />} />

      <HelloGreating />
      <BootstrapTest
        left={
          <DynamicGreating color={'primary'}>
            <h2>This well was hard</h2>
            <h2>Hello world!</h2>
          </DynamicGreating>
        }
        right={
          <DynamicGreating color={'primary'}>
            <h2>This RIGHT</h2>
          </DynamicGreating>
        }
      />

      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Demchenko" link="twitter.com" />
    </Wrapper>
  );
}

export { Header };
export default AppApp;

import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello worls!</h2>;
};

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
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Demchenko" link="twitter.com" />
      {/* <StrictMode>
                <Header />
            </StrictMode> */}
      {/* <Field /> */}
      {/* <Btn /> */}
    </div>
  );
}

export { Header };
export default App;

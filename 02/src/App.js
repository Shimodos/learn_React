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
        };
    }

    nextYear = () => {
        console.log('++');
        this.setState((state) => ({
            years: state.years + 1,
        }));
    };

    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.Text}</button>
                <h1>
                    My name {name} is, surname - {surname}, age -{' '}
                    {this.state.years}
                </h1>
                <a href={link}>My profil</a>
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

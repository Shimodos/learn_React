import { Component, StrictMode } from 'react';
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

function WhoAmI({ name, surname, link }) {
    return (
        <div>
            <h1>
                My name {name()} is, surname - {surname}
            </h1>
            <a href={link}>My profil</a>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <WhoAmI
                name={() => {
                    return 'John';
                }}
                surname="Smith"
                link="facebook.com"
            />
            <WhoAmI
                name={() => {
                    return 'Alex';
                }}
                surname="Demchenko"
                link="twitter.com"
            />
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

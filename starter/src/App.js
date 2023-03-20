import { Component, useState, useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br /> {this.state.autoplay ? 'auto' : null}
//           </div>
//           <div className="buttons mt-3">
//             <button className="btn btn-primary me-2" onClick={() => this.changeSlide(-1)}>
//               -1
//             </button>
//             <button className="btn btn-primary me-2" onClick={() => this.changeSlide(1)}>
//               +1
//             </button>
//             <button className="btn btn-primary me-2" onClick={this.toggleAutoplay}>
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

const calcValue = () => {
  console.log('random');

  return Math.random() * (50 - 1) + 1;
};

const Slider = (props) => {
  const [slide, setSlide] = useState(calcValue);
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImage = useCallback(() => {
    console.log('fetching');
    return [
      'https://i.pinimg.com/236x/15/b0/cb/15b0cb2f75a810d45df3b45c69fe98db.jpg',
      'https://i.pinimg.com/236x/5b/99/1e/5b991ea7942fcb4ae5ae4693ac256bae.jpg',
    ];
  }, [slide]);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* {getSomeImage().map((url, i) => {
          return <img key={i} className="d-block w-100" src={url} alt="slide" />;
          })
        } */}
        <Slide getSomeImage={getSomeImage} />

        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <button className="btn btn-primary me-2" onClick={() => changeSlide(-1)}>
            -1
          </button>
          <button className="btn btn-primary me-2" onClick={() => changeSlide(1)}>
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const Slide = ({ getSomeImage }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImage());
  }, [getSomeImage]);

  return (
    <>
      {images.map((url, i) => (
        <img key={i} className="d-block w-100" src={url} alt="slide" />
      ))}
    </>
  );
};

function App() {
  return <Slider />;
}

export default App;

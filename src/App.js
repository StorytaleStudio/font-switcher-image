import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import {ReactComponent as MakeLogo} from './logo.svg'
import {ReactComponent as ReactLogo} from './react-logo.svg'
import './fontSwitch'

function App({ headline, subheadline, showLogos, backgroundImage }) {

  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      {showLogos && (
        <Logos logoOne={<MakeLogo />} logoTwo={<ReactLogo />} />
      )}

      <h1 class="hero">{headline}</h1>
        <h2>{subheadline}</h2> 

        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
        <script>
        WebFont.load({
          google: {
          families: fonts
          }
        });
        </script>
        <fontSwitch/>
        
    </div>



  );
  
}



App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'storytale.',
  subheadline: 'tell your story',
  showLogos: false,
  backgroundImage: '',
}

export default App;

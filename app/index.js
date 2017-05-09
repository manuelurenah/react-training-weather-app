import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './config/routes';

injectTapEventPlugin();

ReactDOM.render(routes, document.getElementById('app'));

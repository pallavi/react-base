import { BrowserRouter } from 'react-router-dom';
import ReactDOM          from 'react-dom';

import App from './components/App';
import          './styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

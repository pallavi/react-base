import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page not-found">
    This page does not exist. <Link to="/">Go back home.</Link>
  </div>
);

export default NotFound;

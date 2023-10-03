import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className='not'>
            <h2>SORRY...</h2>
            <p>The Page is not available at the moment.</p>
            <Link to="/">Or return back to homepage..</Link>
        </div>
     );
}
 
export default NotFound;

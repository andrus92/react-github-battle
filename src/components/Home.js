import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>GitHub battle: Battle your friends and ... stuff </h1>
            <Link to='battle' className='button'>Battle</Link>
        </div>
    );
}

export default Home;
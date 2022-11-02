import '../styles/Loader.css';

const Loader = (props) => {
    if (props.loading) {
        return (
            <div className='loader'>
                    <div className='loader__wrap'>
                        <div className='loader-circle loader-circle1'></div>
                        <div className='loader-circle loader-circle2'></div>
                        <div className='loader-circle loader-circle3'></div>
                        <div className='loader-circle loader-circle4'></div>
                    </div>
            </div>
        )
    }
    return null;
}

export default Loader;

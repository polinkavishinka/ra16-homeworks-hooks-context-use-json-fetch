import { FaSpinner } from 'react-icons/fa';
import useJsonFetch from '../../hooks/useJsonFetch';

function DataComponent() {
    const { data, loading, error } = useJsonFetch(process.env.REACT_APP_DATA_URL, []);
    return (
        <div className="data">
            <h3>Successful Request</h3>
            {loading ? (
            <div className='loader'>
                <FaSpinner className='spin' />
            </div>
                ) : (
                <div>{data.status}</div>
                )}
            {error && <p className='error'>{error}</p>}
        </div>
    );
}

export default DataComponent;

import { Link } from 'react-router-dom';

const DummyList = () => (
    <>
        <table>
            <thead>
                <tr>
                    <th>List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dummy</td>
                    <td>List</td>
                </tr>
            </tbody>
        </table>
        <button>
            <Link to={'test-react/'}>Back</Link>
        </button>
    </>
);

export default DummyList;

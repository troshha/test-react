import { Link } from 'react-router-dom';

const DummyTable = () => (
    <>
        <table>
            <thead>
                <tr>
                    <th>Table</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dummy</td>
                    <td>Table</td>
                </tr>
            </tbody>
        </table>
        <button>
            <Link to={'/'}>Back</Link>
        </button>
    </>
);

export default DummyTable;

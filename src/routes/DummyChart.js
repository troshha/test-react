import { Link } from 'react-router-dom';

const DummyChart = () => (
    <>
        <table>
            <thead>
                <tr>
                    <th>Chart</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dummy</td>
                    <td>Chart</td>
                </tr>
            </tbody>
        </table>
        <button>
            <Link to={'/test-react'}>Back</Link>
        </button>
    </>
);

export default DummyChart;

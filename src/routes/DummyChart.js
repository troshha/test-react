import { redirect } from 'react-router-dom';

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
        <button onClick={() => redirect('test-react/')}>Back</button>
    </>
);

export default DummyChart;

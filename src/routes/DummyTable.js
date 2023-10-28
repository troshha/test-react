import { redirect } from 'react-router-dom';

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
        <button onClick={() => redirect('/test-react')}>Back</button>
    </>
);

export default DummyTable;

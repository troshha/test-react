import { redirect } from 'react-router-dom';

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
        <button onClick={() => redirect('test-react/')}>Back</button>
    </>
);

export default DummyList;

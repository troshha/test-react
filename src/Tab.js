import React from 'react';
const DummyTable = React.lazy(() => import('./routes/DummyTable'));
const DummyList = React.lazy(() => import('./routes/DummyList'));
const DummyChart = React.lazy(() => import('./routes/DummyChart'));

const Tab = ({ id }) => {
    if (id === 'dummyTable') {
        return <DummyTable />;
    }
    if (id === 'dummyList') {
        return <DummyList />;
    }
    if (id === 'dummyChart') {
        return <DummyChart />;
    }
    return;
};

export default Tab;

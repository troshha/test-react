import React from 'react';
import { Route } from 'react-router-dom';

const DummyTable = React.lazy(() => import('./DummyTable'));
const DummyList = React.lazy(() => import('./DummyList'));
const DummyChart = React.lazy(() => import('./DummyChart'));

const tabsName = {
    dummyTable: 'dummyTable',
    dummyChart: 'dummyChart',
    dummyList: 'dummyList',
};

const Tab = ({ id, path }) => {
    if (id === tabsName.dummyTable) {
        return <Route path={path} element={<DummyTable />}></Route>;
    }
    if (id === tabsName.dummyChart) {
        return <DummyChart />;
    }
    if (id === tabsName.dummyList) {
        return <DummyList />;
    }
};

export default Tab;

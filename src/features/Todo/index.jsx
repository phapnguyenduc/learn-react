import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import TodoDetail from './pages/DetailPage';
import TodoListPage from './pages/ListPage';
import NotFound from '../../components/NotFound';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={TodoListPage} exact />
                <Route path={`${match.path}/:todoId`} component={TodoDetail} exact />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;
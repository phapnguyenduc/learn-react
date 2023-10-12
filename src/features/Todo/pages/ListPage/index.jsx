import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';

TodoListPage.propTypes = {};

function TodoListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'One',
      status: 'new',
    },
    {
      id: 2,
      title: 'Two',
      status: 'new',
    },
    {
      id: 3,
      title: 'Three',
      status: 'completed',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoList = (todo, idx) => {
    const newTodoList = [...todoList]; // clone new array

    console.log('click', todo);

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'completed' ? 'new' : 'completed',
    };

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParam = { status: 'all' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleShowCompletedClick = () => {
    const queryParam = { status: 'completed' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleShowNewClick = () => {
    const queryParam = { status: 'new' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  return (
    <div>
      <h1>Todo</h1>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoListPage;

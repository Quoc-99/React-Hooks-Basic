import { useEffect, useState } from 'react';
import querystring from 'query-string';
import './HomePage.scss';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import PostList from './components/PostList';
// import Pagination from './components/Pagination';
// import PostFiltersForm from './components/PostFiltersForm';
// import Clock from './components/Clock';
// import BetterClock from './components/BetterClock';
import MagicBox from '../../components/MagicBox';

function HomePage() {
	const [todoList, setTodolist] = useState([
		{ id: 1, title: 'I love Easy FronyEnd!' },
		{ id: 2, title: 'We love Easy FronyEnd!' },
		{ id: 3, title: 'They love Easy FronyEnd!' },
	]);

	const [postList, setPostList] = useState([]);
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	});

	const [filters, setFilters] = useState({
		_limit: 10,
		_page: 1,
		title_like: '',
	});

	useEffect(() => {
		async function fetchPostList() {
			// ...
			try {
				const paramsString = querystring.stringify(filters);
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
				const response = await fetch(requestUrl);
				const responseJSON = await response.json();
				console.log({ responseJSON });

				const { data, pagination } = responseJSON;
				setPostList(data);
				setPagination(pagination);
			} catch (error) {
				console.log('Failed to fetch post list: ', error.message);
			}
		}

		fetchPostList();
	}, [filters]);

	function handlePageChange(newPage) {
		console.log('New page: ', newPage);
		setFilters({
			...filters,
			_page: newPage,
		});
	}

	function handleTodoClick(todo) {
		console.log(todo);
		const index = todoList.findIndex((x) => x.id === todo.id);
		if (index < 0) return;

		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodolist(newTodoList);
	}

	function handleTodoFormSubmit(formValue) {
		console.log('Form submit: ' + formValue);
		// Add new todo list to current todo list
		const newTodo = {
			id: todoList.length + 1,
			...formValue,
		};
		const newTodoList = [...todoList];
		newTodoList.push(newTodo);
		setTodolist(newTodoList);
	}

	function handleFiltersChange(newFilters) {
		console.log('New Filters: ', newFilters);
		setFilters({
			...filters,
			_page: 1,
			title_like: newFilters.searchTerm,
		});
	}

	return (
		<div className="App">
			<h1>React hooks - Clock</h1>

			<MagicBox />
			{/* <Clock /> */}
			{/* <BetterClock /> */}
			{/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
			{/* <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick}  
      /> */}
			{/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
		</div>
	);
}

export default HomePage;

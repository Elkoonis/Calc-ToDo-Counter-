import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'mytodos';


export default function TodoMain(){

    const [ todos, setTodos ] = useState( [] );
	const todoNameRef = useRef();

	useEffect( () => {
		const storedTodos = JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY ) );
		if( storedTodos ) {
			setTodos( storedTodos );
		}
	}, [] )

	useEffect( () => {
		localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( todos ) );
	}, [ todos ] )

	function addTodo( event ){

		const name = todoNameRef.current.value;
		if( '' === name ) return;
		console.log( name );

		setTodos( previousTodos => {
			return [ ...previousTodos, { id: uuidv4(), name: name, completed: false } ]
		} );

		todoNameRef.current.value = null;
	}

	function toggleTodo( id ) {
		const newTodos = [...todos]
		const todo = newTodos.find( todo => todo.id === id )
		todo.completed = !todo.completed;
		setTodos( newTodos );
	}

	function clearAll() {
		const newTodos = todos.filter( todo => !todo.completed );
		setTodos( newTodos );
	}

	return(
		<>

			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input ref={todoNameRef} type="text" />
			<button onClick={ addTodo }>Добавить задачу</button>
			<button onClick={clearAll}>Очистить выполненные</button>
			<div>{ todos.filter( todo => !todo.completed ).length } невыполненных дела ещё</div>

		</>
	)
}
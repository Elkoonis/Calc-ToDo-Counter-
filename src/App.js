import React from 'react';
import Calc from './Calc/Calc';
import Counter from './Counter/Counter';
import TodoMain from './ToDo/TodoMain';
// npm install uuid
export default function App(){

	return(
		<>
			<Calc  />
			<Counter />
			<TodoMain />
		</>
	)

}

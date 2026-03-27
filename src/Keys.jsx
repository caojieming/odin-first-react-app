// using crypto.randomUUID() as keys

// a list of todos, each todo object has a task and an id
const todos = [
  { task: "mow the yard", id: crypto.randomUUID() },
  { task: "Work on Odin Projects", id: crypto.randomUUID() },
  { task: "feed the cat", id: crypto.randomUUID() },
];

export function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        // here we are using the already generated id as the key.
        <li key={todo.id}>{todo.task}</li>

        // DON'T do the following i.e. generating keys during render
        // <li key={crypto.randomUUID()}>{todo.task}</li>
      ))}
    </ul>
  );
}


///////////////////////////////////////////////////////////////////////////////


// using list index as keys

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthList() {
  return (
    <ul>
      {/* here we are using the index as key */}
      {months.map((month, index) => (<li key={index}>{month}</li>))}
    </ul>
  );
}


///////////////////////////////////////////////////////////////////////////////


// telling React to "render this component from scratch with fresh state" by changing the key value

import { useState } from 'react';

function GamePage() {
  const [key, setKey] = useState(0);

  return <Game key={key} resetGame={() => setKey(key + 1)} />;
}

// in this case, Game (which isn't defined/specified) will have its state reset when resetGame() is called (state is reset when key is changed/updated)

// this is useful if a webpage has multiple parts, inlcuding game, and you only want to reset Game and not the other parts (you automatically reset all states when refreshing the page)
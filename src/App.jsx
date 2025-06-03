import { useEffect, useState } from "react";
import "./App.css";
import About from "./MyComponents/About";
import AddTodo from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  function onDelete(todo) {
    //console.log("I am on delete of todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodo(title, desc) {
    //console.log("I am adding this todo", title, desc);
    let id;

    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    //console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Router>
        <Header title={"Your title here"} searchbar={true} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>

          <Route path="/about" component={About} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

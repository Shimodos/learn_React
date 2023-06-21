import ToDoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {

  // const isLoggedIn = true;
  // const loginBox = <span>Log in please</span>;
  // const welcomeBox = <span>Welcome back</span>;

  const value = '<script>alert("Hello")</script>';

  return (
      <div>
        {/*<span>{(new Date()).toString()}</span>*/}
        {/*{isLoggedIn ? welcomeBox : loginBox}*/}
        {value}
        <AppHeader />
        <SearchPanel />
        <ToDoList />
      </div>
  );
}

export default App;
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Build React App', important: true },
    { label: 'Have a lunch', important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={todoData} />
    </div>
  );
};

export default App;

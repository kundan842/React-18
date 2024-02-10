import AuthProvider from "./component/AuthProvider";
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import TaskProvider from "./component/TaskProvider";
// each componnet has local state , sharing using the TaskProvider
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

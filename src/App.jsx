import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import LoggedInView from './components/LoggedInView';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="App">
      {isLoggedIn ? <LoggedInView /> : <LoginForm />}
    </div>
  );
}

export default App; 
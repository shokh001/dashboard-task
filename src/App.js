import { RouterProvider } from 'react-router-dom';
import { AccessRoutes, GuestRoutes } from 'utils/routes';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const { loggedIn } = useSelector(state => state.auth)

  return (
    loggedIn ? (
      <RouterProvider router={AccessRoutes} />
    ) : (
      <RouterProvider router={GuestRoutes} />
    )
  );
}

export default App;

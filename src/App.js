import router from "./routes/Routers"
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  );
}

export default App;

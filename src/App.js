
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Pages/Authentication';
import Dashboard from './Pages/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
       <BrowserRouter>
       <Routes> 
       <Route path="/" element={<Dashboard />} />
       <Route path="authentication" element={<Authentication />} />
       </Routes>
       </BrowserRouter>

    </div>
    </Provider>
  );
}

export default App;

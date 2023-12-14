import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/Chat/MainPage';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

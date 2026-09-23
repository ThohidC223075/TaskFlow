import { Routes, Route } from 'react-router';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
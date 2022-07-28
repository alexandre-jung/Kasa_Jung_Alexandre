import { Navigate, Route, Routes } from 'react-router';
import Layout from '@/Layout';
import routes from '@routes';
import About from '@/views/About';
import Home from '@/views/Home';
import Detail from '@/views/Detail';
import NotFound from '@/views/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.home()} element={<Home />} />
        <Route path={routes.about()} element={<About />} />
        <Route path={routes.lodge()} element={<Detail />} />
        <Route path={routes.notFound()} element={<NotFound />} />
        <Route path={'*'} element={<Navigate to={routes.notFound()} />} />
      </Route>
    </Routes>
  );
};

export default App;

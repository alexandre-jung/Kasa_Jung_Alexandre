import { Navigate, Route, Routes } from 'react-router';
import Layout from '@/Layout';
import routes from '@/routes';
import About from '@routes/About';
import Home from '@routes/Home';
import Detail from '@routes/Detail';
import NotFound from '@routes/NotFound';

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

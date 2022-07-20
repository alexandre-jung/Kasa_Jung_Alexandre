export default {
  home: () => '/',
  about: () => '/about',
  lodge: (id?: string | number) => `/lodge/${id !== undefined ? id : ':id'}`,
  notFound: () => '/not-found',
};

export default {
  home: () => '/',
  about: () => '/about',
  lodge: (id?: string) => `/lodge/${id !== undefined ? id : ':id'}`,
  notFound: () => '/not-found',
};

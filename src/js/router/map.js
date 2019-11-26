
/**
  Refs:
  - https://github.com/reactjs/react-router/issues/2779
  - https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
*/

const routes = {

  path: '/',
  component: require('../components/App.js').default,

  getIndexRoute(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, { component: require('../components/Home/').default })
    })
  },

  childRoutes: [
    {
      path:'reviews',
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, { component: require('../components/Reviews/').default })
        })
      },
    },

    {
      path:'aboutus',
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, { component: require('../components/AboutUs/').default })
        })
      },
    },

    {
      path:'contactus',
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, { component: require('../components/ContactUs/').default })
        })
      },
    },

    {
      path: 'post/:id',
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, { component: require('../components/PostItem/').default })
        })
      },
    }
  ]

}

export default routes

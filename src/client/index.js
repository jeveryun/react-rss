import React from 'react'
import ReactDOM, { render } from 'react-dom'
import routes from '../routes'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import { renderRoutes, matchRoutes } from 'react-router-config'

ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)
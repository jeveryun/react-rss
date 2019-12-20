import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import App from './containers/App'
import Home from './contaniners/Home'

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        key: '/',
        loadData: Home.loadData
      }
    ]
  }
]
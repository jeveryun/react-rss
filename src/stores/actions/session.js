import * as types from '../action-types'

export default {
  login (user) {
    return function (dispatch, getState, request) {
      return request.post('/api/login', user).then(function (res) {
        let data = result.data
        dispatch({
          type: types.SET_SESSION,
          payload: data.data
        })
      })
    }
  },
  logout () {
    return function (dispatch, getState, request) {
      return request.get('/api/logout').then(function (res) {
        let data = result.data
        dispatch({
          type: types.SET_SESSION,
          payload: data.data
        })
      })
    }
  },
  getUser () {
    return function (dispatch, getState, request) {
      return request.get('/api/user').then(function (result) {
        let data = result.data;//响应体
        dispatch({
          type: types.SET_SESSION,
          payload: data.data
        });
      });
    }
  }
}
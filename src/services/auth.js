import firebase from 'firebase'

const getCurrentUser = () => {
  return firebase.auth().currentUser
}

const requiresUser = (callback) => {
  const cancel = firebase.auth().onAuthStateChanged((user) => {
    cancel()
    callback(user)
  })
}

export default {
  getCurrentUser,
  requiresUser
}

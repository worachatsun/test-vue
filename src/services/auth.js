import firebase from 'firebase'

const getCurrentUser = () => {
  return firebase.auth().currentUser
}

const requiresUser = () => {
  return new Promise((resolve, reject) => {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()
      if (user) {
        resolve(user)
        return
      }
      reject()
    })
  })
}

export default {
  getCurrentUser,
  requiresUser
}

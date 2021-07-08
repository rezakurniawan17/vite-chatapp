import { projectAuth } from "../firebase/config"
import {ref} from 'vue'

const error = ref(null)
const isSuccess = ref(false)

const signUp = async (displayName, email, password) => {
  error.value = null
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw Error('Cannot register the account now')
    }
    await res.user.updateProfile({ displayName: displayName })
    error.value = null
    isSuccess.value = true
    displayName = ''
    email = ''
    password = ''
    return res
  }
  catch(err) {
    error.value = err.message
  }
}

const useSignup = () => {
  return {error, signUp, isSuccess}
}

export default useSignup
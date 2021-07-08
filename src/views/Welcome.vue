<template>
  <div class="max-w-md px-6 py-12 mx-auto bg-white shadow-2xl form rounded-2xl">
    <div class="login-form" v-if="showLogin">
      <LoginForm  @changeMenu="showLogin = false" />
    </div>
    <div class="signup-form" v-else @changeMenu="showLogin = true">
      <SignupForm @changeMenu="showLogin = true" />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
export default {
  name: 'Welcome Page',
  components: {
    LoginForm, SignupForm
  },
  setup() {
    const showLogin = ref(true)

    const changeMenu = () => {
      console.log('clicked emit')
    }

    return {showLogin, changeMenu}
  },
}
</script>
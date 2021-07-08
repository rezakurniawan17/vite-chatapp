<template>
  <div class="login-form">
    <div>
      <h3 class="text-4xl font-semibold tracking-wide text-center text-purple-500 uppercase">Login Form</h3>
    </div>
    <div class="mt-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="email" class="block text-lg font-medium text-gray-600">Email</label>
          <input type="text" placeholder="johndoe@example.com" v-model="email" class="block w-full mt-2 border-purple-500 rounded-lg focus:border-purple-500">
        </div>
        <div>
          <label for="password" class="block text-lg font-medium text-gray-600">Password</label>
          <input type="password" placeholder="Password" v-model="password" class="block w-full mt-2 border-purple-500 rounded-lg focus:border-purple-500">
        </div>
        <p class="text-sm text-red-400">{{ error }}</p>
        <div class="pt-1">
          <button class="block px-5 py-2 font-medium text-white bg-purple-500 rounded-md shadow-xl hover:bg-purple-400 focus:bg-purple-400">Log In</button>
          <span class="block mt-4 text-sm text-gray-600">Dont have an account yet ? <span @click="handleSwitch" class="font-medium text-purple-500 underline cursor-pointer">Sign Up</span> here</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../compossable/useLogin'
import { useRouter } from 'vue-router'

export default {
 setup(props, context) {
   const email = ref('')
   const password = ref('')
   const route = useRouter()

   const { error, login } = useLogin()

   const handleSubmit = async () => {
     await login(email.value, password.value)
     if(!error.value) {
       route.push({name: 'Chat'})
     }
   }

   const handleSwitch = () => {
     context.emit('changeMenu')
   }

   return {email, password, handleSubmit, handleSwitch, error, login}
 }
}
</script>
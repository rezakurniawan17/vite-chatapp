<template>
  <div class="relative signup-form">
    <div>
      <h3 class="text-4xl font-semibold tracking-wide text-center text-purple-500 uppercase">Sign Up Form</h3>
    </div>
    <div class="mt-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-lg font-medium text-gray-600">Full Name</label>
          <input type="text" placeholder="John Doe" v-model="displayName" class="block w-full mt-2 border-purple-500 rounded-lg focus:border-purple-500">
        </div>
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
          <button class="block px-5 py-2 font-medium text-white bg-purple-500 rounded-md shadow-xl hover:bg-purple-400 focus:bg-purple-400">Sign Up</button>
          <span class="block mt-4 text-sm text-gray-600">Already have an account ? <span @click="handleSwitch" class="font-medium text-purple-500 underline cursor-pointer">Login</span> here</span>
        </div>
      </form>
    </div>
    <div class="mt-4 text-sm alert" v-show="isSuccess">    
      <div class="p-4 text-green-600 bg-green-100 border-l-4 border-green-600 rounded-lg" role="alert">
        <p class="mb-1 font-bold">
          Succes
        </p>
        <p>
          Congratulation, you have created an account
        </p>
        <span @click="handleSwitch" class="block mt-2 text-xs font-semibold underline cursor-pointer">
          Login now
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../compossable/useSignup'
export default {
 setup(props, context) {
   const displayName = ref('')
   const email = ref('')
   const password = ref('')

   const {error, signUp, isSuccess} = useSignup()

   const handleSubmit = async () => {
     await signUp(displayName.value, email.value, password.value)
    
   }

   const handleSwitch = () => {
     context.emit('changeMenu')
     isSuccess.value = false
   }

   return {displayName, email, password, handleSubmit, handleSwitch, error, isSuccess}
 }
}
</script>
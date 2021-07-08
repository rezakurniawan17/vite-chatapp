<template>
  <div class="mt-4">
    <form>
      <textarea
       placeholder="type a message and hit enter to send" 
       v-model="message"
       @keypress.enter.prevent="handleSubmit"
       class="w-full text-sm border-purple-300 rounded-lg shadow focus:border-purple-500"
      ></textarea>
      <div>
        <p>{{ error }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../compossable/getUser'
import useCollection from '../compossable/useCollection'
import { timestamp } from '../firebase/config'


export default {
  setup() {
    const {user} = getUser()
    const {addDoc, error} = useCollection('message')
    const message = ref('')

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createAt: timestamp()
      }

      await addDoc(chat)
      if(!error.value) {
        message.value = ''
      }
    }

    return {message, handleSubmit, error}
  }
}
</script>

<style>

</style>
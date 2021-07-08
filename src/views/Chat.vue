<template>
  <div class="w-full h-screen px-6 py-6 bg-white shadow-xl rounded-xl">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import getUser from '../compossable/getUser'
import { useRouter } from 'vue-router'

export default {
  components: {Navbar, NewChatForm, ChatWindow},
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
       if(!user.value) {
         router.push({ name: 'Welcome' })
       }
    })
  }
}
</script>

<style>

</style>
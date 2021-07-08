<template>
  <nav v-if="user">
    <div class="wrapper">
      <!-- User Profile -->
      <div class="flex items-center justify-between">
        <div>
          <h6 class="text-lg font-semibold text-gray-600">Hello, {{ user.displayName }}</h6>
          <p class="text-sm text-gray-400">{{ user.email }}</p>
        </div>
        <div>
          <button @click="handleLogout" class="px-5 py-2 text-xs font-medium text-white bg-purple-500 rounded-lg shadow-md">Log Out</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import useLogout from '../compossable/useLogout'
import getUser from '../compossable/getUser'
export default {
  setup() {
    const {error, logout} = useLogout()
    const {user} = getUser()
    const handleLogout = async () => {
      await logout()
      if(!error.value) {
        console.log('user logged out')
      }
    }
    return {handleLogout, user}
  }
}
</script>
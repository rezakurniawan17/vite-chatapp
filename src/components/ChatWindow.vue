<template>
  <div class="h-auto px-4 pt-4 pb-4 mt-10 bg-purple-200 rounded-md">
    <div v-if="error">{{  error }}</div>
    <div v-if="documents" class="overflow-y-scroll h-[500px]" ref="message">
      <div v-for="doc in formatedDocuments" :key="doc.id" class="w-auto max-w-xs p-3 mb-4 bg-white rounded-md ">
        <div>
          <span class="text-xs text-gray-400">{{ doc.createAt }}</span>
        </div>
        <div>
          <span class="text-sm font-bold text-gray-700">{{ doc.name }}</span>
        </div>
        <div>
          <span class="text-gray-500">{{ doc.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../compossable/getCollection' 
import {formatDistanceToNow} from 'date-fns'
import { computed, onUpdated, ref } from '@vue/runtime-core'

export default {
  setup() {
    const {error, documents} = getCollection('message')

    const formatedDocuments = computed(() => {
      if(documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createAt.toDate())
          return {...doc, createAt: time}
        })
      }
    })

    // auto scroll to bottom of message
    const message = ref(null)

    onUpdated(() => {
      message.value.scrollTop = message.value.scrollHeight
    })

    return {error, documents, formatedDocuments, message }
  }
}
</script>

<style>

</style>
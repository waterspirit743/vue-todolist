<template>
  <div class="flex flex-col bg-#F4F7FA rounded-2 pt-7.5 pb-1.5 px-8 gap-2">
    <span class="flex justify-center items-center w-full gap-2.5">
      <i
        :class="props.todoItem.favorite ? '!text-yellow-500' : 'text-black'"
        class="pi pi-star !text-5.5 cursor-pointer"
        @click="changeFavorite"
      ></i>
      <span class="flex grow text-black">{{ todoItem.title }}</span>
      <i class="pi pi-trash text-#FFB5B5 !text-5.5"></i>
    </span>
    <span class="flex op-40 gap-2.5 justify-end items-center px-3">
      <i class="pi pi-file text-black !text-3.75"></i>
      <i class="pi pi-clock text-black !text-3.75" @click="console.log(123)"></i>
    </span>
  </div>
</template>
<script setup lang="ts">
import type { TodoItem } from '@/views/HomeView.vue'

const props = defineProps<{
  todoItem: TodoItem
}>()

const emit = defineEmits<{
  'change-favorite': [TodoItem]
  'delete-item': []
}>()

function changeFavorite() {
  emit('change-favorite', props.todoItem)
}
</script>

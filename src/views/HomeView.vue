<script setup lang="ts">
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import { ref, shallowRef, triggerRef } from 'vue'
import { Button } from 'primevue'
const newTodoText = ref('')
type TodoItem = {
  title: string
  detail: string
  favorite: boolean
}
const todoList = shallowRef<TodoItem[]>([])

function addTodoItem() {
  if (newTodoText.value.trim() === '') return
  todoList.value.push({
    title: newTodoText.value,
    detail: '',
    favorite: false,
  })
  triggerRef(todoList)
  newTodoText.value = ''
}
</script>

<template>
  <div class="flex flex-col gap-2.5 w-160 h-205 bg-#157D49 rounded-2 p-2.5">
    <IconField
      class="flex bg-white rounded-1.5 h-12 pl-4 py-3 items-center"
      placeholder="Title"
      unstyled
    >
      <InputText
        type="text"
        v-model="newTodoText"
        class="bg-white grow text-black"
        placeholder="Title"
        unstyled
      />
      <Button
        icon="pi pi-plus"
        icon-class="text-#8593A3"
        variant="text"
        rounded
        aria-label="Filter"
        @click="addTodoItem"
      />
    </IconField>
    <div class="flex flex-col grow bg-#0E5331 rounded-2 px-5 py-3 items-center justify-center">
      <span v-if="todoList.length === 0" class="text-#E9FFFC">無代辦事項</span>
      <span v-else class="text-#E9FFFC">有代辦事項</span>
    </div>
  </div>
</template>

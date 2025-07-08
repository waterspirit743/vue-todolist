<script setup lang="ts">
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import ScrollPanel from 'primevue/scrollpanel'

import { ref, shallowRef, triggerRef } from 'vue'
import { Button } from 'primevue'
import { title } from '@primeuix/themes/aura/card'
import TodoListItem from '@/components/TodoListItem.vue'
const newTodoText = ref('')
export type TodoItem = {
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

    <ScrollPanel
      class="grow rounded-2 overflow-hidden"
      :pt="{
        content: {
          class: 'flex flex-col bg-#0E5331  items-center justify-center',
        },
      }"
    >
      <span v-if="todoList.length === 0" class="text-#E9FFFC">無代辦事項</span>
      <span v-else class="text-#E9FFFC flex flex-col grow gap-2.5 w-full px-5 py-3">
        <TodoListItem v-for="item in todoList" :todo-item="item" @click="" />
      </span>
    </ScrollPanel>
  </div>
</template>

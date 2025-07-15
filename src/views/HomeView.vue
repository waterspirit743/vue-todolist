<script setup lang="ts">
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import ScrollPanel from 'primevue/scrollpanel'

import { computed, ref } from 'vue'
import { Button } from 'primevue'
import TodoListItem from '@/components/TodoListItem.vue'

const newTodoText = ref('')
export type TodoItem = {
  title: string
  detail: string
  favorite: boolean
}
const todoList = ref<TodoItem[]>([])

const sortedTodoList = computed(() => {
  return [...todoList.value].sort((a, b) => {
    if (a.favorite === b.favorite) {
      return 0
    }
    if (a.favorite) {
      return -1
    }
    return 1
  })
})

function addTodoItem() {
  if (newTodoText.value.trim() === '') return
  todoList.value.push({
    title: newTodoText.value,
    detail: '',
    favorite: false,
  })

  newTodoText.value = ''
}
function handleChangeFavorite(itemToToggle: TodoItem) {
  itemToToggle.favorite = !itemToToggle.favorite
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
      <div v-else class="text-#E9FFFC flex flex-col grow gap-2.5 w-full px-5 py-3">
        <TodoListItem
          v-for="item in sortedTodoList"
          :key="item.title"
          :todo-item="item"
          @change-favorite="handleChangeFavorite"
        />
      </div>
    </ScrollPanel>
  </div>
</template>

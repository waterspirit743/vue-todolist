type Todo = {
  id: string
  title: string
  detail: string
  favorite: boolean
  created_at: string
  updated_at: string
}
type TodoSearchOptions = {
  status?: 'favorite' | 'not-favorite' | 'all'
  limit?: number
  offset?: number
}

type TodoSearchResult = {
  todos: Todo[]
  total: number
  limit: number
  offset: number
}
export async function listAllTodos(options?: TodoSearchOptions): Promise<TodoSearchResult> {
  const params = new URLSearchParams(options as any).toString()
  const response = await fetch(`/api/v1/todos?${params}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  return response.json()
}

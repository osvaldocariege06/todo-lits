import { Dispatch } from "react"

interface TaskProps {
    id: number
    title?: string 
    completed: boolean
    onUpdate: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
    isLoadingDelete?: boolean
    isLoadingUpdate?: boolean

}

interface InputProps {
  props: {
    handleAddTask: (task: string) => void
    task: string
    setTask: Dispatch<React.SetStateAction<string>>
    isLoading?: boolean
  }
}


export { TaskProps, InputProps }
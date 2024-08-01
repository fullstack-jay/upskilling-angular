export interface Todo {
    id: number
    task: string
    isComplete: boolean
}

export interface TodoAuthor extends Todo {
    createdAt: string
    updatedBy: string
}

// TodoAuthor otomatis sudah punya id, task, isComplete
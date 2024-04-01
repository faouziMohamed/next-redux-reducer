export type Todo = {
  id: number;
  title: string;
  done: boolean;
  trashed: boolean;
  addedAt: Date;
  updatedAt: Date;
  doneAt: Date | null;
  trashedAt: Date | null;
};

export const tabNames = ["today", "todo", "done", "trash"] as const;
export type TabName = (typeof tabNames)[number];

export type Todos = {
  todos: Todo[];
};

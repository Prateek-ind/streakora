export interface Habit {
    _id: string,
    title: string,
    description: string,
    frequency: string,
    category: string,
}

export type CreateHabitInput = {
  title: string;
  description?: string;
  frequency: "daily" | "weekly";
  category: "health"| "work"| "personal"| "learning"
};
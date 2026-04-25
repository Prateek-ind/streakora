import { CreateHabitInput, Habit } from "@/types/habit.types";

const BASE_URL = "http://localhost:3000"

export const createHabit = async(habitData: CreateHabitInput)=>{
    try{
        const res = await fetch(`${BASE_URL}/api/habits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habitData),
            credentials: "include"
        })

        if(!res.ok){
            throw new Error("Failed to create habit")
        }
        const data = await res.json()
        return data
    }catch(error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Something went wrong");
    }
}

export const getHabits = async(): Promise<Habit[]>=>{
    try
    {
        const res = await fetch(`${BASE_URL}/api/habits`, {
            method: "GET",
            credentials: "include"
        })

        if(!res.ok){
            throw new Error("Failed to get habit")
        }
        const data= await res.json()
        return data.habits
      
    }catch(error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Something went wrong");
    }
}
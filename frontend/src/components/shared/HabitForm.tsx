import { createHabit } from "@/api/habit";
import { queryClient } from "@/lib/queryClient";
import { CreateHabitInput } from "@/types/habit.types";
import { useMutation } from "@tanstack/react-query";
import React, { ChangeEvent, useState } from "react";

const HabitForm = () => {
  const [formData, setFormData] = useState<CreateHabitInput>({
    title: "",
    description: "",
    frequency: "",
    category: "",
  });
  const mutation = useMutation({
    mutationFn: createHabit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["habits"] })
      console.log("form submitted")
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault()
    console.log(formData)
     mutation.mutate(formData)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Title: </label>
        <input
        onChange={handleChange}
          type="text"
          name="title"
          placeholder="Title"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Description: </label>
        <textarea
        onChange={handleChange}
          name="description"
          placeholder="Description"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        ></textarea>
      </div>
      <div className="flex gap-4">
        <select
          name="frequency"
          onChange={handleChange}
          className="text-sm px-2 py-1 border border-zinc-200"
        >
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">weekly</option>
        </select>
        <select
          name="category"
          onChange={handleChange}
          className="text-sm px-2 py-1 border border-zinc-200"
        >
          <option value="">Select Category</option>
          <option value="health">Health</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="learning">Learning</option>
        </select>
      </div>
      <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">
        Add
      </button>
    </form>
  );
};

export default HabitForm;

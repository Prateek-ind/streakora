import React from "react";

const HabitForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Description: </label>
        <textarea
          name="description"
          placeholder="Description"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        ></textarea>
      </div>
      <div className="flex flex-col gap-1">
        <select name="frequency">
          <option value="daily">Daily</option>
          <option value="weekly">weekly</option>
        </select>
        <select name="category">
          <option value="health">Health</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="learning">Learning</option>
        </select>
      </div>
      <button>Add</button>
    </form>
  );
};

export default HabitForm;

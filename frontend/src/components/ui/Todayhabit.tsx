import React from 'react'
import HabitItem from './HabitItem'

const Todayhabit = () => {
    
  return (
    <div>{habits.map(habit=><HabitItem/>)}</div>
  )
}

export default Todayhabit
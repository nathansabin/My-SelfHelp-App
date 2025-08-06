import { useState, useEffect } from "react";
import "./goals.css";

export default function Goals () {
  const getGoals = () => {
     return [
      {
        goal: "meditate",
        priority: 1,
      },
      {
        goal: "stretch",
        priority: 2
      }
    ]
  }

  const [ goals, goalsEffect ] = useState(getGoals);

  return (
    <div>
      <ul>
        {goals.map((g, index) => {
          return (
          <li classname={g.priority} key={index}>
            {g.goal}
          </li>
          )})
        }
      </ul>
    </div>
  )
}

import { useEffect, useState } from "react";
import "./quote.css";

export default function Quote() {
  const [ genQuote, genQuoteState ] = useState("Something inportant");

  return (
  <div>
      <div>
        <text>{genQuote}</text>
      </div>
  </div>
  )
}

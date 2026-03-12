import {createRoot, useState} from 'react-dom/client'

import { name, age } from "./person.js"; // destructure
import message from "./message.js";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// createRoot() defines HTML element & displays
// render() what is rendered in HTML container
// result displayed in root element
createRoot(document.getElementById('root')).render(
  <Counter />
);
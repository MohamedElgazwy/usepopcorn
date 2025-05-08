import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./starRating.jsx";
import App from "./App.jsx";
import "./index.css";
function Stars() {
  const [rate, setRate] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setRate} />
      <p>Your rate is {rate} star</p>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Stars />
    <StarRating
      maxRating={5}
      size={38}
      color="#fcc419"
      messages={["Terrible", "Bad", "Okay", "Very good", "Excellent"]}
      defaultRating={0}
    />
    <StarRating maxRating={8} size={24} color="red" defaultRating={4} />
  </StrictMode>
);

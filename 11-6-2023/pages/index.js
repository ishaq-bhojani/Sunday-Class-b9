import { useState } from "react";
import Button from "@/components/button/Button";
import Greet from "@/components/greet/Greet";
import List from "@/components/list/List";

export default function Home() {
  const [arr, setArr] = useState([
    "This is an Item",
    "This is another Item",  
    "This is another Item 2"
  ]);

  const addHandler = () => {
    //arr.push("New Item");
    setArr([...arr, "New Item"]);
  };

  return (
    <div>
      <Greet />
      <List arr={arr} />
      <Button click={addHandler}>Add</Button>
    </div>
  )
}

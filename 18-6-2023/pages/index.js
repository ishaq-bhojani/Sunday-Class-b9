import { useEffect, useState } from "react";
import List from "@/components/list/List";
import db from '../utils/db.json'

export default function Home() {

  // console.log(db);
  // const [arr, setArr] = useState(db.authors);
  const [data, setData] = useState(1);

  const [data2, setData2] = useState(1);

  useEffect(() => {
    console.log("Called");
  }, [data]);

  const update = () => {
    setData((oldData) => {
      const d = oldData + 1;
      return d;
    });
  }

  const update2 = () => {
    setData2((oldData) => {
      const d = oldData + 1;
      return d;
    });
  }

  return (
    <div>
      {data}
      <button onClick={update}>Add</button>
      {data2}
      <button onClick={update2}>Add Data 2</button>
      {/* <List arr={arr} /> */}
    </div>
  )
}

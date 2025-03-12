import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    var fn = fetch("https://67c81d690acf98d07084ec3d.mockapi.io/Demo");
    
    var fn1 = fn.then((res) => res.json());
    var fn2 = fn1.then((data) => {
      setItemList(data);
    });
  }, []);
  return (
    <div className="item-list">
      {itemList.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            image={item.image}
            time={item.time}
          />
        );
      })}
    </div>
  );
}

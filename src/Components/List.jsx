import React from "react";
import Item from "./Item";

const List = ({ productsData }) => {
  const Datatoshow = productsData.map((item) => {
    return (
      item.isFruit ?
          <Item itemName={item.title} textColor="white" itemId={item.id} />
          :
          <Item itemName={item.title} itemColor="red" textColor="yellow" itemId={item.id} />
  )
  });
  return <div> {Datatoshow}</div>;
};

export default List;

import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const { robots } = props;
  const cardComponent = robots.map((robotObj, _idx) => {
    return (
      <Card
        key={robotObj.id}
        id={robotObj.id}
        name={robotObj.name}
        email={robotObj.email}
      ></Card>
    );
  });

  return <>{cardComponent}</>;
};

export default CardList;

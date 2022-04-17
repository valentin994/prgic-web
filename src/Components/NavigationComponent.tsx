import React from "react";
import Header from "../UI/Header";

const items: string[] = ["Home", "Gallery"];

function NavigationComponent() {
  return <Header listOfItems={items}/>;
}

export default NavigationComponent;

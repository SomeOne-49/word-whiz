'use client';
import { useState } from "react";
import Actions from "./actions";
import Box from "./box";

const Card = () => {
  const [isHide, setIsHide] = useState(true)
  return (
    <div>
      <Box front="Front" back="Back" desc='Description' isHide={isHide} />
      <Actions toggleCard={() => setIsHide(!isHide)} isHide={isHide} />
    </div>
  )
}

export default Card;
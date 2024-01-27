import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <FaHeart onClick={toggle} color="#ff0000" size={40}></FaHeart>;
  return <FaRegHeart onClick={toggle} size={40} />;
};

export default Like;

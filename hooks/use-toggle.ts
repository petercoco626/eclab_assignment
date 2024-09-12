import { useState } from 'react';

export function useToggle() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  const handleToggleOff = () => {
    setToggle(false);
  };

  const handleToggleOn = () => {
    setToggle(true);
  };

  return {
    toggle,
    handleToggle,
    handleToggleOff,
    handleToggleOn,
  };
}

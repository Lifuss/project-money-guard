import  { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => setIsOpen(prev => !prev);
  const open = () => {
    setIsOpen(true);
  };
  return { isOpen, close, open, toggle };
};

export default useModal;

import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => setIsOpen(prev => !prev);
  const open = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);
  return { isOpen, close, open, toggle };
};

export default useModal;

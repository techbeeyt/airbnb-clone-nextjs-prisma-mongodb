'use client';

import { useState, useEffect } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
  children
}) => {
  const [hasMounted, setHAsMounted] = useState(false);
  useEffect(() => {
    setHAsMounted(true)
  }, []);

  if(!hasMounted) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly;
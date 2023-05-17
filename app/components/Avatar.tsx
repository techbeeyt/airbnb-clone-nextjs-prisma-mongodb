'use client';

import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src?: string | null
}

const Avatar: React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <Image
      className='rounded-full'
      height={30}
      width={30}
      alt='Avatar'
      src={src ? src : '/images/placeholder.jpg'}
    />
  )
}

export default Avatar
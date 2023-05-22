"use client";

import React from 'react';
import { SafeUser } from '../types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButonProps> = ({
  listingId,
  currentUser
}) => {
  const hasFavourite = true;
  const toggleFavourite = () => {};

  return (
    <div
      onClick={toggleFavourite}
      className='
        relative
        hover:opacity-80
        transition
        cursor-pointer
      '
    >
      <AiOutlineHeart
        size={28}
        className='
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        '
      />

      <AiFillHeart
        size={24}
        className={
          hasFavourite ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
  )
}

export default HeartButton
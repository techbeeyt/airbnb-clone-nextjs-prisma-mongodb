"use client";

import React from 'react'
import Container from '../Container';

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiBoatFishing, GiIsland, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach"
  },

  {
    label: "Windmill",
    icon: GiWindmill,
    description: "This property is close to the beach"
  },

  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is close to the beach"
  },

  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is close to the beach"
  },

  {
    label: "Pool",
    icon: TbPool,
    description: "This property is close to the beach"
  },

  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is close to the beach"
  },

  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to the beach"
  },

  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities"
  },

  {
    label: "Castles",
    icon: GiCastle,
    description: "This property has skiing activities"
  },

  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is near forerst"
  },

  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property is near forerst"
  },

  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is near forerst"
  },

  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert"
  },

  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is near forerst"
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');

  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if(!isMainPage) {
    return null;
  } 


  return (
    <Container>
      <div
        className='
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        '
      >
        {categories.map(item => (
          <>
            <CategoryBox
              key={item.label}
              label={item.label}
              selected={category === item.label}
              icon={item.icon}
            />
          </>
        ))}
      </div>
    </Container>
  )
}

export default Categories
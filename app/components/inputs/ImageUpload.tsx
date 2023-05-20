"use client";

import React, { useCallback } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var coudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange
}) => {
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
  }, [onChange]);
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset='tvbtweil'
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className='
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dahsed
              border-2
              p-20
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            '
          >
            <TbPhotoPlus size={50} />
            <div className='absolute inset-0 w-full h-full'>
              Click here to upload
            </div>
            {value && (
                <div className='absolute inset-0 w-full h-full z-10'>
                  <Image
                    alt='House'
                    fill
                    style={{ objectFit: 'cover'}}
                    src={value}
                  />
                </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
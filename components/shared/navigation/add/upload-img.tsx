'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const UploadImg = () => {
  const [uploadedImg, setUploadedImg] = useState<string | ''>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImg(imageUrl);
    }
  };

  return (
    <div className="flex items-center justify-between rounded-xl bg-primary-light px-3 py-1.5">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/gallery.svg"
          width={18}
          height={18}
          alt="image"
        />
        <p className="text-primary">Card Image</p>
      </div>
      <label
        htmlFor="uploadImg"
        className="center_ele relative size-11 cursor-pointer overflow-hidden rounded-xl bg-primary"
      >
        <Image
          src="/assets/icons/upload-img.svg"
          width={22}
          height={22}
          alt="Upload Image"
        />
        {uploadedImg && <Image src={uploadedImg} fill alt="Uploaded Image" />}
      </label>
      <input
        type="file"
        onChange={handleImageUpload}
        className="hidden"
        accept="image/*"
        id="uploadImg"
      />
    </div>
  );
};

export default UploadImg;

import React from 'react';
import { useState, useMemo, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
 
import images from '../assets'
import { Input } from '../components';







const CreateNft = () => {  
  const [fileUrl, setFileUrl] = useState(null);
  const { theme } = useTheme();

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToInfura(acceptedFile[0]);
  }, []);
   
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });
  const fileStyle = useMemo(
    () => (
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed  
       ${isDragActive ? ' border-file-active ' : ''} 
       ${isDragAccept ? ' border-file-accept ' : ''} 
       ${isDragReject ? ' border-file-reject ' : ''}`),
    [isDragActive, isDragReject, isDragAccept],
      );

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl">Create new item</h1>

        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Upload file</p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</p>

          
                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="file upload"
                    className={theme === 'light' ? 'filter invert' : undefined}
                  />
                </div>

                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-lg">Drag and Drop File</p>
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2">OR browse media on your device</p>

      </div>
      </div>

      {fileUrl && (
              <aside>
                <div>
                  <img
                    src={fileUrl}
                    alt="Asset_file"
                  />
                </div>
              </aside>
            )}
         </div>
      </div>

     
      <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) => updateFormInput({  })}
        />
         <Input
          inputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleClick={(e) => updateFormInput({  })}
        />

        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={(e) => updateFormInput({  })}
        />
        



      </div>
      </div>
      




  );
};

export default CreateNft;

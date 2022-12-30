import React from 'react'

 const Input = ({inputType, title, placeholder, handleClick}) => (   
  
    <div className="mt-10 w-full">
    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">{title}</p>


    <input 
    className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none
     font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 flexBetween flex-row"
    placeholder={placeholder}
            onChange={handleClick}></input>
    </div>
  );


export default Input
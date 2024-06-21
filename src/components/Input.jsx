import React, { useRef } from "react";

function Input(props) {
  const inputRef = useRef()

  const onChangeHandler = () => {
    if (props.type === 'file') {
      props.onChange(inputRef.current.files[0]);  // Access the file object
    } else {
      props.onChange(inputRef.current.value);
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        placeholder={props.name}
        onChange={onChangeHandler}
        value={props.value}
        className={`bg-transparent border outline-none border-gray-500 rounded-md py-[10px] px-2 md:w-96 w-80 hover:border-[#1d9bf0] focus:border-[#1d9bf0] hover:placeholder:text-[#1d9bf0] focus:placeholder:text-[#1d9bf0] ${props.className}`}
      />
    </div>
  );
}

export default Input;

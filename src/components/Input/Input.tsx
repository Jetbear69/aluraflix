import React, { forwardRef, useEffect } from "react";
import InputProps from "../../models/InputProps";

const Input = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ title, textValue, placeholder, style, ...props }, ref) => {
    useEffect(() => {
      if (ref && "current" in ref && ref.current) {
        ref.current.value = textValue || "";
      }
    }, [textValue, ref]);

    return (
      <div className="flex flex-col">
        <h1 className="font-SourceCodePro py-3">{title}</h1>
        <textarea
          ref={ref}
          className="bg-[#03122F] rounded-lg px-2 text-gray-400 border-2 border-blue-600 font-semibold w-80 lg:w-[573px] lg:h-[55px] resize-none overflow-y-auto scrollbar-hidden"
          placeholder={placeholder}
          required
          style={{ ...style }}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

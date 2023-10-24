import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  placeholder?: string;
  id?: string;
  value?: string | string[] | number | undefined;
  validation?: object;
  level?: string;
}

const FormInput = ({
  type,
  name,
  size,
  placeholder,
  id,
  value,
  validation,
  level,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {level ? level : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;

import type { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface inputInterface {
  labelName: string;
  inputId: string;
  inputType: HTMLInputTypeAttribute;
  inputValue: string;
  inputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  inputClassName?: string;
}

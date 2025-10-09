import type { FC } from "react"
import type { inputInterface } from '../../types/commonTypes';

const Input: FC<inputInterface> = ({
    labelName,
    inputId,
    inputType,
    inputValue,
    inputOnChange,
    inputClassName,
    labelClassName,
    errors
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={inputId}
                className={`font-medium text-gray-700 mb-1 ${labelClassName}`}
            >
                {labelName}
            </label>
            <input
                type={inputType}
                id={inputId}
                value={inputValue}
                onChange={(e) => inputOnChange(e)}
                className={`px-4 py-3 border border-gray-300 rounded-lg focus::outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${inputClassName}`}
            />
            {errors &&
                errors.map((error, index) => {
                    return <li key={index} className="text-red-500 list-none">{error}</li>
                })
            }
        </div >
    )
}

export default Input
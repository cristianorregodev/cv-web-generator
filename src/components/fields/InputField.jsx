import React from 'react'

export const InputField = ({ options: { type, name, label, handleChange, error = false } }) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <input
                type={type}
                name={name}
                {...handleChange(name)}
                id={name}
                className={`block py-2 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-dark-50 border-dark-600 focus:border-primary-500 focus:outline-none focus:ring-0 peer ${
                    error && 'border-crusta-400/90'
                }`}
                placeholder=" "
                autoComplete="off"
                required
            />
            <label
                htmlFor={name}
                className={`peer-focus:font-medium absolute text-sm text-dark-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 ${
                    error ? 'peer-focus:text-crusta-400/90' : 'peer-focus:text-primary-500'
                } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
                {label}
            </label>
            {error && <span className="text-xs text-crusta-400/90">Este es un error</span>}
        </div>
    )
}

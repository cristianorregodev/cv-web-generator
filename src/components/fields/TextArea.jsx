import React from 'react'

export const TextArea = ({ options: { name, label, handleChange, error } }) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <label htmlFor={name} className="block mb-2 text-sm  text-dark-400 ">
                {label}
            </label>
            <textarea
                name={name}
                id={name}
                rows="4"
                className="block p-2.5 w-full text-sm text-dark-50 bg-dark-800 rounded-lg border border-dark-500 focus:ring-primary-500 focus:border-primary-500 focus:outline-none resize-none"
                placeholder="Escribe un resumen sobre ti en máximo 300 caracteres"
                maxLength={300}
            ></textarea>
            {error && <span className="text-xs text-crusta-400/90">Este es un error</span>}
        </div>
    )
}

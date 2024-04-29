import { useFieldArray } from 'react-hook-form'
import { InputField } from '@/components/fields/InputField'
import { TextArea } from '@/components/fields/TextArea'
import React from 'react'

export const BasicInfo = ({ options: { register, errors, control } }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'basics.profiles',
    })
    return (
        <fieldset>
            <legend className="text-primary-50 font-bold text-lg my-4">Información básica</legend>
            <div className="grid md:grid-cols-2 md:gap-x-6 md:gap-y-2">
                <InputField
                    options={{ type: 'text', name: 'basics.name', label: 'Nombre completo', handleChange: register }}
                />
                <InputField
                    options={{
                        type: 'text',
                        name: 'basics.career',
                        label: 'Profesión: Años experiencia',
                        handleChange: register,
                    }}
                />
                <InputField
                    options={{
                        type: 'email',
                        name: 'basics.email',
                        label: 'Correo electrónico',
                        handleChange: register,
                    }}
                />
                <InputField
                    options={{ type: 'tel', name: 'basics.phone', label: 'Teléfono', handleChange: register }}
                />
                <InputField
                    options={{ type: 'url', name: 'basics.website', label: 'Sitio web', handleChange: register }}
                />
                <InputField
                    options={{
                        type: 'url',
                        name: 'basics.image',
                        label: 'URL de imagen de perfil',
                        handleChange: register,
                    }}
                />
                <InputField
                    options={{ type: 'text', name: 'basics.location', label: 'País/Ciudad', handleChange: register }}
                />
            </div>
            <TextArea options={{ name: 'summary', label: 'Resumen' }} />
            {fields.map((field, index) => (
                <div key={field.id}>
                    <select name={`profiles.${index}.network`} id="">
                        <option value="">Network</option>
                        <option value="">Facebook</option>
                        <option value="">Twitter</option>
                        <option value="">LinkedIn</option>
                    </select>
                    <input type="text" name={`profiles.${index}.url`} id="" placeholder="Url del perfil" />
                    <button type="button" onClick={() => remove(index)}>
                        Delete
                    </button>
                </div>
            ))}
            <button type="button" onClick={() => append({ network: '', url: '' })}>
                Agregar perfil
            </button>
        </fieldset>
    )
}

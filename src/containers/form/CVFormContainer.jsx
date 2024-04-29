'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { BasicInfo } from './BasicInfo'

export const CVFormContainer = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()
    const submit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(submit)} className="w-full mt-10 pl-10">
            <BasicInfo options={{ register, errors, control }} />
            <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Submit
            </button>
        </form>
    )
}

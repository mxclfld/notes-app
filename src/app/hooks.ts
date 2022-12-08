import { useState, ChangeEvent } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { FormValues, FormReturn } from './types'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useForm(initialValues: FormValues): FormReturn {
  const [values, setValues] = useState(initialValues)

  return [
    values,
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
  ]
}

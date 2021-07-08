import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'

type ArgsType = (initialValue: string | number | any, url: string) => void

export const useFormHandler: ArgsType = (initialValue, url) => {
  const [value, setValue] = useState(initialValue)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await axios
      .post(url, value)
      .then((res) => {
        console.log('response', res)
      })
      .catch((err) => {
        console.log('error', err)
      })

    setValue('')
  }

  return {
    value,
    changeHandler,
    submitHandler,
  }
}

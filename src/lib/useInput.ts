import { ChangeEvent, useState } from 'react'

export const useInputValue = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value || e.target.innerText)
    },
  }
}

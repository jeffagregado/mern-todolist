import { useEffect, useRef } from 'react'

export const useInputFocus = (state: boolean) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state) {
      inputRef.current?.focus()
    }
  }, [state, inputRef])

  return {inputRef}
}

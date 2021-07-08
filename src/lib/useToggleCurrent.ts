import { useState } from 'react'

export const useToggleCurrent = (initialValue: any) => {
  const [current, setCurrent] = useState(initialValue)

  const handleToggleComplete = (id: number) => {
    setCurrent((prevCurrent: any) => {
      return prevCurrent.map((prev: any) => {
        if (prev.id === id) {
          return { ...prev, complete: !prev.complete }
        }
        return prev
      })
    })
  }

  return {current, handleToggleComplete}
}

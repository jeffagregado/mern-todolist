import { ReactNode } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormValues {}

interface Props {
  children: ReactNode
}

const Form = ({ children }: Props) => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormValues>()

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log('data', data)
  }

  return (
    <form action="" onSubmit={handleSubmit(submitHandler)}>
      {children}
    </form>
  )
}

export default Form

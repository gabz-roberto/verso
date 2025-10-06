import React from 'react'

// interface Props<T extends FieldValues> 
interface Props {}

const AuthForm = ({type, schema, defaultValues, onSubmit}: Props) => {
  return (
    <div>AuthForm -- {type}</div>
  )
}

export default AuthForm
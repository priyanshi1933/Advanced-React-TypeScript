import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface IRegisterInfo {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  bio?: string
}

const RegisterForm = () => {

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    phone: yup.string().required("Phone is required").length(10, "Phone number should be of 10 digits")
  })

  const { register, handleSubmit, formState: { errors  } } = useForm<IRegisterInfo>({
    resolver: yupResolver(validationSchema)
  });
  const handleRegister = (data: IRegisterInfo) => {
    console.log(data)
  }

  return (
    <div className='container mt-5'>
      <center>
        <h1>Registration Form with Validation</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <input type='text' className='form-control mt-4' {...register('firstName')} style={{ width: '500px' }} placeholder='Enter First Name' />
          <p className="text-danger mt-1">{errors.firstName?.message}</p>

          <input type='text' className='form-control mt-4' {...register('lastName')} style={{ width: '500px' }} placeholder='Enter Last Name' />
          <p className="text-danger mt-1">{errors.lastName?.message}</p>

          <input type='email' className='form-control mt-4' {...register('email')} style={{ width: '500px' }} placeholder='Enter Email' />
          <p className="text-danger mt-1">{errors.email?.message}</p>

          <input type='number' className='form-control mt-4' {...register('phone')} style={{ width: '500px' }} placeholder='Enter Phone Number' />
          <p className="text-danger mt-1">{errors.phone?.message}</p>

          <input type='text' className='form-control mt-4' {...register('bio')} style={{ width: '500px' }} placeholder='Enter Bio' />

          <button type='submit' className='btn btn-primary btn-lg mt-4'>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default RegisterForm
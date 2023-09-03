import React, { useEffect } from 'react'
import logo from 'assets/images/logo.png'
import { Button, Container, ErrorMessage, Form, H4, Img, Input, InputWrapper, Label, LeftContent, RightContent, Text } from './signUp.style'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from 'redux/slice/auth'
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  login: yup.string().required("Login majburiy"),
  password: yup.string().required("Parol majburiy"),
  ivv: yup.string().required("IIV majburiy"),
  viib: yup.string().required("VIIB majburiy"),
  tiib: yup.string().required("TIIB majburiy"),
});

const SignUp = () => {  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      ivv: '',
      viib: '',
      tiib: '',
      login: '',
      password: '',
    },
    resolver: yupResolver(schema)
  });

  const { register, handleSubmit, formState, reset, control } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = (data) => {
    // console.log('Form submitted', data);
    dispatch(signUserStart())
    try {
      dispatch(signUserSuccess(data))
      navigate('/signin')
    } catch (error) {
      dispatch(signUserFailure('xatolik'))
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <Container>
      <LeftContent>
        <Img src={logo} alt='logo' />
        <Text>Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie lacus. Faucibus arcu aliquam nullam nunc dictumst.</Text>
      </LeftContent>

      <RightContent >
        <H4>Ro`yxatdan o`tish</H4>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label>
            IVV

            <Controller
              name="ivv"
              control={control}
              render={({ field }) => (
                <InputWrapper border={field.value ? 'true' : ''}>
                  <Input
                    {...field}
                    placeholder='Enter your IVV'
                    type='text' id='ivv'
                    {...register('ivv')}
                  />
                </InputWrapper>
              )}
            />
            <ErrorMessage className='error'>{errors.ivv?.message}</ErrorMessage>
          </Label>

          <Label>
            VIIB Boshqarmasi
            <Controller
              name="viib"
              control={control}
              render={({ field }) => (
                <InputWrapper border={field.value ? 'true' : ''}>
                  <Input {...field} placeholder='Enter VIIB' type='text' id='viib' {...register('viib')} />
                </InputWrapper>
              )}
            />
            <ErrorMessage className='error'>{errors.viib?.message}</ErrorMessage>
          </Label>

          <Label>
            Tuman IIBo’lim
            <Controller
              name="tiib"
              control={control}
              render={({ field }) => (
                <InputWrapper border={field.value ? 'true' : ''}>
                  <Input {...field} placeholder='Enter Tuman IIB' type='text' id='tiib' {...register('tiib')} />
                </InputWrapper>
              )}
            />
            <ErrorMessage className='error'>{errors.tiib?.message}</ErrorMessage>
          </Label>

          <Label>
            Login
            <Controller
              name="login"
              control={control}
              render={({ field }) => (
                <InputWrapper border={field.value ? 'true' : ''}>
                  <Input  {...field} placeholder='Enter your login' type='text' id='login' {...register('login')} />
                </InputWrapper>
              )}
            />
            <ErrorMessage className='error'>{errors.login?.message}</ErrorMessage>
          </Label>

          <Label>
            Parol
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputWrapper border={field.value ? 'true' : ''}>
                  <Input {...field} placeholder='Enter your password' type='password' id='password' {...register('password')} />
                </InputWrapper>
              )}
            />
            <ErrorMessage className='error'>{errors.password?.message}</ErrorMessage>
          </Label>

          <Button disabled={isSubmitting} type='submit'>Kirish</Button>
        </Form>
      </RightContent>
    </Container>
  )
}

export default SignUp
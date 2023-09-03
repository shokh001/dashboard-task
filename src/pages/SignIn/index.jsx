import React, { useEffect } from 'react'
import logo from 'assets/images/logo.png'
import { Button, Close, Container, ErrorMessage, Form, H4, Img, Input, InputWrapper, Label, LeftContent, RightContent, Text } from './signIn.style'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUserSuccess, signUserFailure, signUserStart } from 'redux/slice/auth'

const schema = yup.object({
  login: yup.string().required("Login majburiy"),
  password: yup.string().required("Parol majburiy"),
});

const SignIn = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
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
      if (user && user.login === data.login && user.password === data.password) {
        dispatch(loginUserSuccess(data))
        navigate('/')
      } else {
        alert('Login yoki parol xato!!!')
      }
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
        <H4>Tizimga kirish</H4>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label>
            Login
            <InputWrapper>
              <Controller
                name="login"
                id="login"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input placeholder='Loginni kiriting' {...field} type='text' id='login' {...register('login')} />
                    {field.value && (
                      <Close
                        onClick={() => field.onChange('')}
                      />
                    )}
                  </>
                )}
              />
            </InputWrapper>
            <ErrorMessage className='error'>{errors.login?.message}</ErrorMessage>
          </Label>

          <Label>
            Password
            <InputWrapper>
              <Controller
                name="password"
                id="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input placeholder='Parolni kiriting' {...field} type='password' id='password' {...register('password')} />
                    {field.value && (
                      <Close
                        onClick={() => field.onChange('')}
                      />
                    )}
                  </>
                )}
              />
            </InputWrapper>
            <ErrorMessage className='error'>{errors.password?.message}</ErrorMessage>
          </Label>

          <Button disabled={isSubmitting} type='submit'>Kirish</Button>
        </Form>
      </RightContent>
    </Container>
  )
}

export default SignIn
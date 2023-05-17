'use client';

import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from 'react';

import { signIn } from 'next-auth/react';

import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';

import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import useRegisterModel from '@/app/hooks/useRegisterModal';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const registerModal = useRegisterModel();
  const loginModal = useLoginModal();
  const [ isLoading, setIsLoading ] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }} = useForm<FieldValues>({
      defaultValues: {
        email: '',
        password: ''
      }
    });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false
    })
      .then((callback) => {
        setIsLoading(false);
        
        if(callback?.ok) {
          toast.success("Logged in");
          router.refresh();
          loginModal.onClose();
        }

        if(callback?.error) {
          toast.error(callback.error);
        }
      })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Welcome to Airbnb'
        subtitle='Create an acount'
      />

      <Input 
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='email'
      />

      <Input 
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='password'
      />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button 
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => {}} 
      />

      <Button 
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')} 
      />

      <div 
        className=' 
          text-neutral-500
          text-center
          mt-4
          font-light
        '
      >
        <div className='flex flex-row items-center justify-center gap-2'>
          <div>Don&apos;t have an account ?</div>
          <div
            onClick={() => {
              loginModal.onClose();
              registerModal.onOpen();
            }}
            className='text-neutral-800 cursor-pointer hover:underline'
          >Create an account</div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal;
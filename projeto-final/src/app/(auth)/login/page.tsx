'use client'

import '@/app/styles/formLogin.module.css';
import Image from 'next/image';
import z from 'zod';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { validateCredentials } from '@/app/libs/credentials';


export interface LoginCredentials {
    email: string,
    password: string
}

const LoginSchema = z.object({
    email: z.string().trim().email('Email com formato incorreto'),
    password: z.string({message: 'Insira uma senha'}).trim().min(2, {message: 'Senha requer no mínimo 2 caracteres'})
})

export default function LoginPage(){

    const loginAction = async (formData: FormData) => {

        const loginData: LoginCredentials = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        const result = LoginSchema.safeParse(loginData);

        if(!result.success){

            let errorMsg = '';

            result.error.issues.forEach((issue) => {
                errorMsg = errorMsg + issue.message + '. ';
            });

            toast.error(errorMsg);

            return;
        }
        

        const loginValidacao = await validateCredentials(loginData);

        if(loginValidacao){
            toast.error(loginValidacao.error);
            return;
        }
        
    }


    return (
        
    )
}
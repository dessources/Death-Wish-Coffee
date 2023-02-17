import React from "react";
import LoginForm from "../LoginForm"
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
// import { useRouter } from "next/router";


//jest.mock('next/router')

describe('LoginForm', () => { 
    test('should render a login heading', () => {
        //useRouter.mockReturnValueOnce({ query: {} });
        render(<LoginForm />)
        const headingElement = screen.getByTestId('loginTitle')
        expect(headingElement).toBeInTheDocument()
    })

    test('should render an Email input field', () => {
        //useRouter.mockReturnValueOnce({ query: {} });
        render(<LoginForm />)
        const inputElement = screen.getByTestId('email')
        expect(inputElement).toBeInTheDocument()
    })

    test('should be able to type into input field', () => {
        //useRouter.mockReturnValueOnce({ query: {} });
        render(<LoginForm />)
        const inputElement = screen.getByTestId('email')
        fireEvent.change(inputElement, { target: { placeholder: "test@test.com"}})
        expect(inputElement.placeholder).toBe("test@test.com")
    })

    test('should render a password input field', () => {
        //useRouter.mockReturnValueOnce({ query: {} });
        render(<LoginForm />)
        const inputElement = screen.getByTestId('password')
        expect(inputElement).toBeInTheDocument()
    })

    test('should be able to type into input field', () => {
        //useRouter.mockReturnValueOnce({ query: {} });
        render(<LoginForm />)
        const inputElement = screen.getByTestId('password')
        fireEvent.change(inputElement, { target: { placeholder: "root"}})
        expect(inputElement.placeholder).toBe("root")
    })

    test('should render a login button', () => {
        //useRouter.mockReturnValueOnce({ query: {} });
        render(<LoginForm />)
        const buttonElement = screen.getByTestId('loginButton')
        expect(buttonElement).toBeInTheDocument()
    })
    
}) 


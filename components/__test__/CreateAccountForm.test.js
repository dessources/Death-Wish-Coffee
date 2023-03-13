import React from "react";
import CreateAccountForm from "../CreateAccountForm";
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';

describe('CreateAccountForm', () => {
    test('should render a create account heading', () => {
        render(<CreateAccountForm />)
        const headingElement = screen.getByTestId('createAccount')
        expect(headingElement).toBeInTheDocument()
    })

    test('should render a first name input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('firstName')
        expect(inputElement).toBeInTheDocument()
    })

    test('should be able to type into input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('firstName')
        fireEvent.change(inputElement, { target: { placeholder: "John"}})
        expect(inputElement.placeholder).toBe("John")
    })

    test('should render a last name input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('lastName')
        expect(inputElement).toBeInTheDocument()
    })

    test('should be able to type into input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('lastName')
        fireEvent.change(inputElement, { target: { placeholder: "Doe"}})
        expect(inputElement.placeholder).toBe("Doe")
    })

    test('should render an Email input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('emailAddress')
        expect(inputElement).toBeInTheDocument()
    })

    test('should be able to type into input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('emailAddress')
        fireEvent.change(inputElement, { target: { placeholder: "test@test.com"}})
        expect(inputElement.placeholder).toBe("test@test.com")
    })

    test('should render an Email input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('password')
        expect(inputElement).toBeInTheDocument()
    })

    test('should be able to type into input field', () => {
        render(<CreateAccountForm />)
        const inputElement = screen.getByTestId('password')
        fireEvent.change(inputElement, { target: { placeholder: "root"}})
        expect(inputElement.placeholder).toBe("root")
    })

    test('should render a create button', () => {
        render(<CreateAccountForm />)
        const buttonElement = screen.getByTestId('createButton')
        expect(buttonElement).toBeInTheDocument()
    })

    test('should render a label newsletters', () => {
        render(<CreateAccountForm />)
        const labelElement = screen.getByText(/i would like/i)
        expect(labelElement).toBeInTheDocument()
    })

    test('should render a link to /Login', () => {
        render(<CreateAccountForm />)
        const linkElement = screen.getByTestId('linkLogin')
        expect(linkElement).toBeInTheDocument()
    })
})
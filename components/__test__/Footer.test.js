import { render, screen,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../Footer'

describe('Footer', () => {
    test('should render an h5', () => {
        render(<Footer/>)
        const headingElement = screen.getByText( /let's drink/i)
        expect(headingElement).toBeInTheDocument()
    })

    test('should render an input field', () => {
        render(<Footer/>)
        const inputElement = screen.getByPlaceholderText(/Enter your/i)
        expect(inputElement).toBeInTheDocument()
    })

    test('should be able to type into input field', () => {
        render(<Footer/>)
        const inputElement = screen.getByPlaceholderText(/Enter your/i)
        fireEvent.change(inputElement, { target: { value: "test@test.com"}})
        expect(inputElement.value).toBe("test@test.com")
    })

    test('should render a sign me up button', () => {
        render(<Footer/>)
        const buttonElement = screen.getByRole('button', { name: /sign me up/i})
        expect(buttonElement).toBeInTheDocument()
    })
})
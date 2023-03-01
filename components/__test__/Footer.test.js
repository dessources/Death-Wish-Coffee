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

    test('should render the logo', () => {
        render(<Footer/>)
        const imgElement = screen.getByTestId('logo')
        expect(imgElement).toBeInTheDocument()
    })

    test('should render a div CompanyLinks', () => {
        render(<Footer/>)
        const divElement = screen.getByTestId('companyLinks')
        expect(divElement).toBeInTheDocument()
    })

    test('should render an h5 Company ', () => {
        render(<Footer/>)
        const headingElement = screen.getByRole('heading', { name: /company/i})
        expect(headingElement).toBeInTheDocument()
    })

    test('should render an h5 Accounts ', () => {
        render(<Footer/>)
        const headingElement = screen.getByRole('heading', { name: /accounts/i})
        expect(headingElement).toBeInTheDocument()
    })

    test('should render an h5 Legal ', () => {
        render(<Footer/>)
        const headingElement = screen.getByRole('heading', { name: /legal/i})
        expect(headingElement).toBeInTheDocument()
    })

    test('should render a p Reviews', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/reviews/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p FAQ', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/faq/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Refund', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/refund/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Your account', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/your account/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Shopping', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/shopping/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Subscription', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/subscription/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Wholesale', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/wholesale/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Terms', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/terms/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Privacy', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/privacy/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p PROP', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/prop/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p @ Death Wish', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/@ death wish coffee co/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a p Get Wired', () => {
        render(<Footer/>)
        const textElement = screen.getByText(/get wired/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('should render a div CompanyLinks', () => {
        render(<Footer/>)
        const iconElement = screen.getByTestId('twitter')
        expect(iconElement).toBeInTheDocument()
    })

    test('should render a div CompanyLinks', () => {
        render(<Footer/>)
        const iconElement = screen.getByTestId('fb')
        expect(iconElement).toBeInTheDocument()
    })

    test('should render a div CompanyLinks', () => {
        render(<Footer/>)
        const iconElement = screen.getByTestId('insta')
        expect(iconElement).toBeInTheDocument()
    })

    test('should render a div CompanyLinks', () => {
        render(<Footer/>)
        const iconElement = screen.getByTestId('youtube')
        expect(iconElement).toBeInTheDocument()
    })
})
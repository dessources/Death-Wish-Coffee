import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubNavbar from '../SubNavbar';


describe("SubNavbar", () => {
    test('should render an h2 title', () => {
        render(<SubNavbar />);
        const headingElement = screen.getByText(/colombian, kicked up/i)
        expect(headingElement).toBeInTheDocument()
    })

    test('a paragraph in white should be visible', () => {
        render(<SubNavbar />);
        const textElement = screen.getByTestId('subNavText')
        expect(textElement).toBeInTheDocument()
    })

    test('should render a shop button', () => {
        render(<SubNavbar />);
        const buttonElement = screen.getByTestId('subNavButton')
        expect(buttonElement).toBeInTheDocument()
    })

    test('should render an h5 title', () => {
        render(<SubNavbar />);
        const headingElement = screen.getByText(/rebellious by nature/i)
        expect(headingElement).toBeInTheDocument()
    })

    test('a paragraph in white should be visible', () => {
        render(<SubNavbar />);
        const textElement = screen.getByTestId('subNavText2')
        expect(textElement).toBeInTheDocument()
    })

    test('should render an h6 title', () => {
        render(<SubNavbar />);
        const headingElement = screen.getByText(/mugs up, mother functioners./i)
        expect(headingElement).toBeInTheDocument()
    })


})
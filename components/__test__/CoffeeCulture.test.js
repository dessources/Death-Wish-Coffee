import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CoffeeCulture from '../CoffeeCulture'

describe('CoffeeCulture', () => {
    test('should render an h1', () => {
        render(<CoffeeCulture />)
        const headingElement = screen.getByRole('heading', { name: /coffee culture/i})
        expect(headingElement).toBeInTheDocument()
    })
})
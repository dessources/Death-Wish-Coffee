import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomepageVideos from '../HomepageVideos'

describe('HomepageVideos', () => {
    test('should render a paragraph', () => {
        render(<HomepageVideos/>)
        const textElement = screen.getByText(/our medium roast/i)
        expect(textElement).toBeInTheDocument()
    })

    //------------------H3 titles----------------------------------------
    
    test('should render an h3 Coffee that slaps', () => {
        render(<HomepageVideos/>)
        const headingElement = screen.getByRole('heading', { name: /coffee that slaps/i})
        expect(headingElement).toBeInTheDocument()
    })

    test('should render an h3 Embody the brew', () => {
        render(<HomepageVideos/>)
        const headingElement = screen.getByRole('heading', { name: /embody the brew/i})
        expect(headingElement).toBeInTheDocument()
    })

    test('should render an h3 Handle our beans', () => {
        render(<HomepageVideos/>)
        const headingElement = screen.getByRole('heading', { name: /handle our beans/i})
        expect(headingElement).toBeInTheDocument()
    })

    //-------------------Videos-----------------------------------------------

    test('should render video with data-testid coffeeVideo', () => {
        render(<HomepageVideos/>)
        const videoElement = screen.getByTestId('coffeeVideo')
        expect(videoElement).toBeInTheDocument()
    })

    test('coffeeVideo should have the correct src', () => {
        render(<HomepageVideos/>)
        const videoElement = screen.getByTestId('coffeeVideo')
        expect(videoElement.getAttribute('src')).toBe('https://media.graphassets.com/fpNxKHSRQqO1ciJS4SFf')
    })

    test('should render video with data-testid brewVideo', () => {
        render(<HomepageVideos/>)
        const videoElement = screen.getByTestId('brewVideo')
        expect(videoElement).toBeInTheDocument()
    })

    test('BrewVideo should have the correct src', () => {
        render(<HomepageVideos/>)
        const videoElement = screen.getByTestId('brewVideo')
        expect(videoElement.getAttribute('src')).toBe('https://media.graphassets.com/cvZdL1QzT0ecpUBhclCq')
    })

    test('should render video with data-testid beansVideo', () => {
        render(<HomepageVideos/>)
        const videoElement = screen.getByTestId('beansVideo')
        expect(videoElement).toBeInTheDocument()
    })

    test('BeansVideo should have the correct src', () => {
        render(<HomepageVideos/>)
        const videoElement = screen.getByTestId('beansVideo')
        expect(videoElement.getAttribute('src')).toBe('https://media.graphassets.com/h0T2YBYQlSPtSnDCzb0O')
    })

    //------------------------Captions-------------------------------------------------------------

    test('should render a caption under coffeVideo', () => {
        render(<HomepageVideos/>)
        const textElement = screen.getByText(/always sourced/i)
        expect(textElement).toBeInTheDocument()
    })

    test('should render a caption under brewVideo', () => {
        render(<HomepageVideos/>)
        const textElement = screen.getByText(/handcrafted mugs/i)
        expect(textElement).toBeInTheDocument()
    })

    test('should render a caption under beansVideo', () => {
        render(<HomepageVideos/>)
        const textElement = screen.getByText(/prefer the hands-on/i)
        expect(textElement).toBeInTheDocument()
    })

    //------------------buttons-------------------------------------- 

    test('should render 2 buttons Shop Now', () => {
        render(<HomepageVideos/>)
        const buttonElements = screen.getAllByRole('button', { name: "SHOP NOW"})
        expect(buttonElements.length).toBe(2)
    })

    test('should render a Find Store button', () => {
        render(<HomepageVideos/>)
        const buttonElement = screen.getByRole('button', { name: "Find Store"})
        expect(buttonElement).toBeInTheDocument()
    })
    
})
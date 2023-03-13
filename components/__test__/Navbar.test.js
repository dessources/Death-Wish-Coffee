import React from "react";
import Navbar from "../Navbar"
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { SessionProvider, useSession } from 'next-auth/react';
import store from '../../redux/store'


describe("Navbar", () => {
    test("should render correctly", () => {
        render(
            <Provider store={store}>
                <SessionProvider session={{ user: { name: 'John Doe' } }}>
                    <Navbar />
                </SessionProvider>
            </Provider>
        );

        // check if all the links are displayed
        expect(screen.getByText("SUBSCRIPTION")).toBeInTheDocument();
        expect(screen.getByText("SHOP")).toBeInTheDocument();
        expect(screen.getByText("STORE LOCATOR")).toBeInTheDocument();
        expect(screen.getByText("ABOUT")).toBeInTheDocument();

        // check if the logo is displayed
        const logoImage = screen.getByAltText("logo");
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute("src", "/_next/image?url=%2Fimg.jpg&w=96&q=75");

        // check if the cart icon is displayed
        const cartIcon = screen.getByTestId("shoppingCart");
        expect(cartIcon).toBeInTheDocument();

        // check if the cart is hidden
        const cart = screen.queryByRole("dialog");
        expect(cart).not.toBeInTheDocument();
    });

   test("should display the cart when the cart icon is clicked", () => {
        render(
            <Provider store={store}>
                <SessionProvider session={{ user: { name: 'John Doe' } }}>
                    <Navbar />
                </SessionProvider>
            </Provider>
        );

        const cartIcon = screen.getByTestId("shoppingCart");
        fireEvent.click(cartIcon);

        const cart = screen.getByTestId("cart");
        expect(cart).toBeInTheDocument();
    }); 
});


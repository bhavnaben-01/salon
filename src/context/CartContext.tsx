import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    cartCount: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from local storage
    useEffect(() => {
        const savedCart = localStorage.getItem("Solaro-cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem("Solaro-cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, item];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) return;
        setCart((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        );
    };

    const clearCart = () => setCart([]);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                isCartOpen,
                setIsCartOpen,
                cartCount,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

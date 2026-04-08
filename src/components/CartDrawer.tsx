import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal } = useCart();

    return (
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
                <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle className="font-heading text-2xl flex items-center justify-between">
                        Your Cart
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-6">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <p className="font-body text-muted-foreground text-lg">Your cart is empty</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="font-body text-sm font-semibold uppercase tracking-[1px] text-primary"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-start py-4">
                                    <div className="space-y-1">
                                        <h4 className="font-heading text-lg font-medium text-foreground">{item.name}</h4>
                                        <p className="font-body text-base text-foreground">
                                            $ {item.price.toFixed(2)} USD
                                        </p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors block pt-1"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                            className="w-16 h-12 text-center font-body text-lg border border-border rounded focus:outline-none bg-transparent"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t border-border bg-background space-y-6">
                        <div className="flex justify-between items-center px-2">
                            <span className="font-body text-xl text-foreground font-medium">Subtotal</span>
                            <span className="font-body text-xl text-foreground font-bold">$ {subtotal.toFixed(2)} USD</span>
                        </div>
                        <button className="w-full font-body text-sm font-bold uppercase tracking-[2px] bg-primary text-primary-foreground py-5 rounded-lg hover:bg-primary/90 transition-all">
                            Continue to Checkout
                        </button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;

"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

// --- Types ---
export interface CartItem {
  productId: string;
  price: number;
  quantity: number;
  title: string;
}

export interface UserDetails {
  fullName: string;
  email: string;
  phone: string;
  date: string;
}

interface AppContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  clearCart: () => void;
  addToCart: (item: CartItem) => void;
  updateUserDetails: (details: UserDetails) => void;
  removeItem: (productId: string) => void;
  goToOrderPage: () => void;
  cartCount: number;
  cartTotal: number;
  isReady: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
const today = new Date().toISOString().split("T")[0];
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    email: "",
    phone: "",
    date: today,
  });
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();

  // Load from sessionStorage on mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem("cartItems");
    const savedUser = sessionStorage.getItem("userDetails");
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedUser) setUserDetails(JSON.parse(savedUser));
    setIsReady(true);
  }, []);

  // Persist to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [cartItems, userDetails]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.productId === item.productId);
      if (exists) {
        return prev.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateUserDetails = (details: UserDetails) => {
    setUserDetails(details);
  };

  const removeItem = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const clearCart = () => {
    sessionStorage.removeItem("cartItems");
    sessionStorage.removeItem("userDetails");
    setCartItems([]);
  };

  const goToOrderPage = () => {
    router.push("/order");
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        userDetails,
        setUserDetails,
        clearCart,
        addToCart,
        updateUserDetails,
        removeItem,
        goToOrderPage,
        cartCount,
        cartTotal,
        isReady,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be inside AppProvider");
  return ctx;
};

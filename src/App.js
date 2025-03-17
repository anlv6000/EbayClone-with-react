import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import AppRoutes from "@/routes";
import "./App.css";
import { Toaster } from "sonner";
import DataDisplay from "@/components/DataDisplay"; // Import DataDisplay

// MongoDB integration
require("dotenv").config();
const mongoose = require("mongoose");

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <CartProvider>
                    <Router>
                        <AppRoutes />
                        <DataDisplay />
                        <Toaster position="bottom-right" />
                    </Router>
                </CartProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;

import React from "react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function ProductGrid({ products }) {
    return (React.createElement("div", { className: "lg:w-3/4 my-8" },
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, products.map((product) => (React.createElement(Card, { key: product.id, className: "overflow-hidden flex flex-col h-full" },
            React.createElement(Link, { to: `/products/${product.id}`, className: "overflow-hidden" },
                React.createElement("div", { className: "h-48 overflow-hidden" },
                    React.createElement("div", { className: "w-full h-full bg-muted flex items-center justify-center" }, product.thumbnail ? (React.createElement("img", { src: product.thumbnail, alt: product.title, className: "object-cover h-48" })) : (React.createElement("span", { className: "text-2xl" }, "\uD83D\uDDBC\uFE0F"))))),
            React.createElement(CardHeader, { className: "pb-2" },
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement(Badge, null, product.brand),
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("span", { className: "text-yellow-500 mr-1" }, "\u2605"),
                        React.createElement("span", { className: "text-sm" }, product.rating))),
                React.createElement(CardTitle, { className: "text-lg truncate" },
                    React.createElement(Link, { to: `/products/${product.id}` }, product.title))),
            React.createElement(CardContent, { className: "pb-2 flex-grow" },
                React.createElement("p", { className: "text-muted-foreground line-clamp-2 text-sm" }, product.description)),
            React.createElement(CardFooter, null,
                React.createElement(Button, { variant: "outline", asChild: true },
                    React.createElement(Link, { to: `/products/${product.id}` }, "View Details")))))))));
}

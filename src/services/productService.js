import axiosInstance from "./axiosInstance";
export async function getProducts() {
    const response = await axiosInstance.get("/products");
    return response.data;
}
export async function getProductById(id) {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
}
export async function getProductsByCategory(categoryId) {
    const response = await axiosInstance.get(`/products`, {
        params: { categoryId },
    });
    return response.data;
}
export async function getProductsBySeller(sellerId) {
    const response = await axiosInstance.get(`/products`, {
        params: { sellerId },
    });
    return response.data;
}
export async function createProduct(productData) {
    try {
        const newProduct = Object.assign(Object.assign({}, productData), { id: Date.now().toString(), createdAt: new Date().toISOString() });
        const response = await axiosInstance.post("/products", newProduct);
        return response.status === 201 ? newProduct : null;
    }
    catch (error) {
        console.error("Error creating product:", error);
        return null;
    }
}
export async function searchProducts(query) {
    const response = await axiosInstance.get(`/products`, {
        params: { q: query },
    });
    return response.data;
}
export async function editProduct(id, updatedData) {
    try {
        const response = await axiosInstance.put(`/products/${id}`, updatedData);
        return response.status === 200;
    }
    catch (error) {
        console.error("Error editing product:", error);
        return false;
    }
}
export async function filterProducts({ categoryId, minPrice, maxPrice, brands, sortBy, }) {
    const params = Object.assign(Object.assign({ categoryId, price_gte: minPrice, price_lte: maxPrice }, (brands && brands.length > 0 && { brand: brands })), { _sort: sortBy === "newest"
            ? "createdAt"
            : sortBy === "rating"
                ? "rating"
                : "price", _order: sortBy === "price-desc" ? "desc" : "asc" });
    const response = await axiosInstance.get(`/products`, { params });
    return response.data;
}

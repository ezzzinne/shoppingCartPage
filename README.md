# 🛒 Shopping Cart Page

A modern shopping cart page built using **TypeScript**, **Redux Toolkit (RTK)**, **RTK Query**, and **CSS Modules**. This page dynamically fetches products from an API, displays them in a responsive layout, and allows users to load more items via a “Load More” button.

---

## ✨ Features

- ✅ Product listing with images, names, category and prices from dummy API
- ✅ API integration using **RTK Query**  
- ✅ “Load More” functionality  
- ✅ State management using **Redux Toolkit**  
- ✅ Fully typed with **TypeScript**  
- ✅ Scoped styles via **CSS Modules**  
- ✅ Mobile-responsive design  

---

## 🚀 Technologies Used

| Technology      | Description                  |
|-----------------|------------------------------|
| React           | UI Library                   |
| TypeScript      | Static typing for safety     |
| Redux Toolkit   | State management             |
| RTK Query       | Data fetching & caching      |
| CSS Modules     | Scoped modular styling       |

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ezzzinne/shoppingCartPage.git
   cd shopping-cart

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn

3. **Start the development server:**

    ```bash
    npm run dev
    #or
    yarn dev

---

## 🔧 Project Structure

    src/
    ├── app/                 # RTK Query API
    │   └── productsApi.ts
    ├── components/          # UI components (ProductCard, CardSection, Navbar, etc.)
    ├── pages/               # Page components (ShoppingPage.tsx)
    ├── redux/               # Redux store configuration
    │   └── store.ts
    ├── App.tsx              # Root app component
    ├── main.tsx             # Vite entry point
    
---

## 🌐 API Source
This app uses a dummy product API:

    https://dummyjson.com/products

You can change the base URL in app/productsApi.ts if needed.

---

## 📡 API Integration
Products are fetched using RTK Query:

```bash
// productsApi.ts
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, void>({
            query: () => 'products',
        }),
    }),
});
```

To use in a component:

```bash
const { data, isLoading, isFetching } = useGetProductsQuery();
```

---

## 📱 Responsive Design
- Grid layout adjusts based on screen size
- Mobile-first design principles
- Product cards and layout are adaptive

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome!

Feel free to fork this repo, raise issues, or open pull requests.

---

Made with ❤️ by Ezinne Nwani
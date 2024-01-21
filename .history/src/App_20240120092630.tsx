import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Category from "./pages/Category"
import Login from './pages/login/Login';
import Analytics from './pages/Analytics';
import CustemerReview from './pages/CustemerReview';
import Products from './pages/Products';
import ShopCard from './pages/ShopCard';


// Sample data types
type SaleData = {
  date: string;
  amount: number;
};

type RevenueData = {
  month: string;
  revenue: number;
};

type Product = {
  id: string;
  name: string;
  price: number;
};

type Order = {
  id: string;
  product: Product;
  quantity: number;
};

type CategoryType = {
  id: string;
  name: string;
};

type Review = {
  id: string;
  text: string;
  rating: number;
  comment: string;
};

// Sample props for components
type DashboardProps = {
  saleData: SaleData[];
  revenueData: RevenueData[];
  // ... other props
};

type AnalyticsProps = {
  salesData: SaleData[];
  // ... other props
};

type ProductProps = {
  products: Product[];
  // ... other props
};

type OrderProps = {
  orders: Order[];
  // ... other props
};

type CategoryProps = {
  categories: CategoryType[];
  // ... other props
};

type ReviewProps = {
  reviews: Review[];
  // ... other props
};



const App: React.FC = () => {

  const saleData: SaleData[] = [
    { date: '2022-01-01', amount: 100 },
    { date: '2022-01-02', amount: 150 },
    { date: '2022-01-03', amount: 200 },
    { date: '2022-01-04', amount: 120 },
    { date: '2022-01-05', amount: 180 },
    { date: '2022-01-06', amount: 90 },
    { date: '2022-01-07', amount: 110 },
    { date: '2022-01-08', amount: 130 },
    { date: '2022-01-09', amount: 170 },
    { date: '2022-01-10', amount: 160 },
  ];

  const revenueData: RevenueData[] = [
    { month: 'January', revenue: 500 },
    { month: 'February', revenue: 700 },
    { month: 'March', revenue: 600 },
    { month: 'April', revenue: 800 },
    { month: 'May', revenue: 900 },
    { month: 'June', revenue: 750 },
    { month: 'July', revenue: 850 },
    { month: 'August', revenue: 950 },
    { month: 'September', revenue: 700 },
    { month: 'October', revenue: 850 },
  ];

  const product: Product[] = [
    { id: '1', name: 'Product 1', price: 20 },
    { id: '2', name: 'Product 2', price: 25 },
    { id: '3', name: 'Product 3', price: 30 },
    { id: '4', name: 'Product 4', price: 15 },
    { id: '5', name: 'Product 5', price: 40 },
    { id: '6', name: 'Product 6', price: 22 },
    { id: '7', name: 'Product 7', price: 18 },
    { id: '8', name: 'Product 8', price: 27 },
    { id: '9', name: 'Product 9', price: 35 },
    { id: '10', name: 'Product 10', price: 28 },
  ];

  const orders: Order[] = [
    { id: '1', product: product[0], quantity: 2 },
    { id: '2', product: product[2], quantity: 1 },
    { id: '3', product: product[4], quantity: 3 },
    { id: '4', product: product[6], quantity: 2 },
    { id: '5', product: product[8], quantity: 1 },
    { id: '6', product: product[1], quantity: 2 },
    { id: '7', product: product[3], quantity: 3 },
    { id: '8', product: product[5], quantity: 1 },
    { id: '9', product: product[7], quantity: 2 },
    { id: '10', product: product[9], quantity: 1 },
  ];

  const categories: CategoryType[] = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
    { id: '4', name: 'Category 4' },
    { id: '5', name: 'Category 5' },
    { id: '6', name: 'Category 6' },
    { id: '7', name: 'Category 7' },
    { id: '8', name: 'Category 8' },
    { id: '9', name: 'Category 9' },
    { id: '10', name: 'Category 10' },
  ];

  const reviews: Review[] = [
    { id: '1', text: 'Great product!',  comment:'am happy', rating: 5 },
    { id: '2', text: 'Good quality.',   comment:'am happy', rating: 4 },
    { id: '3', text: 'Excellent service.',   comment:'am happy', rating: 5 },
    { id: '4', text: 'Not satisfied with the product.',   comment:'am happy', rating: 2 },
    { id: '5', text: 'Fast shipping!',   comment:'am happy', rating: 5 },
    { id: '6', text: 'Average product.',   comment:'am happy', rating: 3 },
    { id: '7', text: 'Outstanding experience.',   comment:'am happy', rating: 5 },
    { id: '8', text: 'Prompt delivery.',   comment:'am happy', rating: 4 },
    { id: '9', text: 'Poor customer service.',   comment:'am happy', rating: 2 },
    { id: '10', text: 'Love it!',  comment:'am happy', rating: 5 },
  ];



  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard saleData={saleData} revenueData={revenueData} />} />
          <Route path="/dashboard" element={<Dashboard saleData={saleData} revenueData={revenueData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/review" element={<CustemerReview reviews={reviews} />} />
          <Route path="/analytics" element={<Analytics saleData={saleData} />} />
          <Route path="/product" element={<Products product={product} />} />
          <Route path="/shop" element={<ShopCard/>}/>
          <Route path="/orders" element={<Orders orders={orders} />} />
          <Route path="/category" element={<Category categories={categories} />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

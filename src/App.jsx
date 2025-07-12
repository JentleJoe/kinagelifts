// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './layout/Layout';
// import Home from './pages/Home/Home';
// import Products from './pages/Products/Products';
// import Services from './pages/Services/Services';
// import Contact from './pages/Contact/Contact';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import Hero from './pages/Home/components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
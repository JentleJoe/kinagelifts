import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'

// Lazy load page components
const Products = lazy(() => import('./pages/Products/Products'))
const Services = lazy(() => import('./pages/Services/Services'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Loading page...</p>
    </div>
  </div>
)

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route 
          path="/products" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Products />
            </Suspense>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } 
        />
      </Route>
    </Routes>
  )
}

export default AppRoutes

import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './AppRoutes'
import { prefetchServicesRouteAssets } from './utils/prefetchServicesRoute'

function IdleServicesPrefetch() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    if (connection?.saveData || /2g/.test(connection?.effectiveType || '')) {
      return
    }

    let cancelled = false
    let timeoutId
    let idleId

    const runPrefetch = () => {
      if (cancelled) {
        return
      }
      void prefetchServicesRouteAssets()
    }

    // Schedule low-priority prefetch so initial rendering remains the priority.
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(runPrefetch, { timeout: 2500 })
    } else {
      timeoutId = window.setTimeout(runPrefetch, 1500)
    }

    return () => {
      cancelled = true
      if (typeof window.cancelIdleCallback === 'function' && idleId) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <IdleServicesPrefetch />
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

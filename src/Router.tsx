import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CodeDetails } from './pages/CodeDetails'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/CodeDetails/:number" element={<CodeDetails />} />
      </Route>
    </Routes>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Form } from './-forms/Form.tsx'
import { SearchUsers } from './users/SearchUsers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchUsers />
  </StrictMode>,
)

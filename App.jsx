import './App.css'
import { Route, Routes } from 'react-router'
import LibraryHeader from './Components/LibraryHeader'
import LibraryFooter from './Components/LibraryFooter'
import LibraryLogin from './Components/LibraryLogin'
import LibraryBooks from './Components/LibraryBooks'
import Office from './Components/Office'
import OfficeList from './Components/OfficeList'


function App() {
  return (
    <div className="app-shell">
      <LibraryHeader />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LibraryLogin />} />
          <Route path="/office" element={
    <>
      <Office />
      <OfficeList />
    </>
  }
/>
          <Route path="/books" element={<LibraryBooks />} />
          <Route path="*" element={<LibraryLogin />} />
        </Routes>
      </main>
      <LibraryFooter />
    </div>
  )
} 

export default App
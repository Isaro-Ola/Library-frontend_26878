import { useState, useEffect } from 'react'
import axios from 'axios'
import LibraryButton from './LibraryButton'

function OfficeList() {
  const [offices, setOffices] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadOffices()
  }, 
  []
)

  async function loadOffices() {
    try {
      const response = await axios.get("http://localhost:8082/api/office/all")
      setOffices(response.data)
    } 
    catch (error) {
      alert(error.response ? error.response.data : "Cannot reach the server")
    }
  }

  async function deleteOffice(id) {
    if 
    (!window.confirm("Are you sure you want to delete this office?")) 
    {
      return
    }
    try {
      const response = await axios.delete(`http://localhost:8082/api/office/delete/${id}`)
      alert(response.data)
      loadOffices()
    } 
    catch (error) {
      alert(error.response ? error.response.data : "Cannot reach the server")
    }
  }

  const filteredOffices = offices.filter(office =>
    (office.name || '').toLowerCase().includes(search.toLowerCase()) ||
    String(office.officeNumber).includes(search)
  )

  return (
    <div>
      <h2>ALL OFFICES</h2>
      <input
        type="text"
        placeholder="Search by office name or number"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table border="1">
        <thead>
          <tr>
            <th>Office Name</th>
            <th>Office Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffices.map(office => (
            <tr key={office.id}>
              <td>{office.name}</td>
              <td>{office.officeNumber}</td>
              <td>
                <LibraryButton buttonLabel="Delete" onClickButton={() => deleteOffice(office.id)} />
                <LibraryButton buttonLabel="Update" onClickButton={() => {}} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OfficeList
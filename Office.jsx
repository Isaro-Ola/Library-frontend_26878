import { useState } from 'react'
import axios from 'axios'
import LibraryButton from './LibraryButton'

function Office() {
  const [officeName, setOfficeName] = useState('')
  const [officeNumber, setOfficeNumber] = useState('')
  const [deleteOfficeNumber, setDeleteOfficeNumber] = useState('')

    async function saveOffice() {
    try {
      const response = await axios.post("http://localhost:8082/api/office/save", {
        name: officeName,
        officeNumber: officeNumber
      })
      alert(response.data)
    } catch (error) {
      alert(error.response ? error.response.data : "Cannot reach the server")
    }
  }

  async function deleteOffice() {
    try {
      const response = await axios.delete(
        `http://localhost:8082/api/office/delete/by-number/${deleteOfficeNumber}`
      )
      alert(response.data)
    } catch (error) {
      alert(error.response ? error.response.data : "Cannot reach the server")
    }
  }

  return (
    <div>
      <h2>SAVE OFFICE</h2>
      <label>Office Name: </label>
      <input type="text" onChange={e => setOfficeName(e.target.value)} /><br />
      <label>Office Number: </label>
      <input type="text" onChange={e => setOfficeNumber(e.target.value)} /><br />
      <LibraryButton buttonLabel="SAVE OFFICE" onClickButton={saveOffice} />

      <h2>DELETE OFFICE</h2>
      <label>Office Number: </label>
      <input type="text" onChange={e => setDeleteOfficeNumber(e.target.value)} /><br />
      <LibraryButton buttonLabel="DELETE OFFICE" onClickButton={deleteOffice} />
    </div>
  )
}

export default Office
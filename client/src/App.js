import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import Header from './components/Header'
import AddContact from './components/AddContact'

function App() {
    const [showForm, setShowForm] = useState(false)
    const [data, updateData] = useState([])

    useEffect(() => {
        const getContacts = async () => {
            const contactFromServer = await fetchContacts()
            updateData(contactFromServer)
        }

        getContacts()
    }, [])

    // Fetch Contacts
    const fetchContacts = async () => {
        const res = await fetch('/api')
        const data = await res.json()

        return data
    }

    // Add Contact
    const onAdd = async (contact) => {
        const res = await fetch('/api',
            {
                method: 'POST',
                header: {
                    'Contennt-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })

        const newContact = await res.json()

        updateData([newContact, ...data])
    }

    return (
        <div className='container'>
            <Header showForm={showForm} toggleForm={() => setShowForm(!showForm)} />
            {showForm && <AddContact onAdd={onAdd} />}
            {data.length > 0 ? <ContactList data={data} /> : 'No Contacts available'}
        </div>
    )
}

export default App

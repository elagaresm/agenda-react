import { useState } from 'react'

const AddContact = ({ onAdd }) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!nombre) {
            alert('Por favor agregar un nombre')
            return
        }

        onAdd({ nombre, apellido, telefono })

        setNombre('')
        setApellido('')
        setTelefono('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Nombre</label>
                <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Apellido</label>
                <input type='text' placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Telefono</label>
                <input type='text' placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <input type='submit' value='Agregar' className='btn btn-block' />
        </form>
    )
}

export default AddContact
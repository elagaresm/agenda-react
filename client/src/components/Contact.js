const Contact = ({ contact, onDelete }) => {
    return (
        <>
            <div className='contact'>
                <h3>{contact.nombre} {contact.apellido}</h3>
                <p>{contact.telefono}</p>
            </div>
        </>
    )
}

export default Contact
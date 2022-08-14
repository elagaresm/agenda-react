import Button from './Button'
const Header = ({ showForm, toggleForm }) => {
    const onClick = () => {
        toggleForm()
    }

    return (
        <header className="header">
            <h1>Contactos</h1>
            <Button color={showForm ? 'red' : 'green'} onClick={onClick} text={showForm ? 'Cerrar' : 'Agregar'} />
        </header>
    )
}

export default Header
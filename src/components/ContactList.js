import Contact from "./Contact"

const ContactList = ({ data }) => {
    return (
        <>
            {data.map((contact, index) => (
                <Contact key={index} contact={contact} />
            ))}
        </>
    )
}

export default ContactList
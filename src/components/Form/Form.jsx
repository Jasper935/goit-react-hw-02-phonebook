export const Form = ({name, children}) => {
    return(
        <form action="Submit"
        name={name}>
            {children}
        </form>
    )
}
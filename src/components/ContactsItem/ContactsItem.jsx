import { Button } from "components/Button/Button"
export const ContactsItem=({ name, number})=>{
return(
    <li>
        <p>{name}</p><p>{number}</p>
        <Button name={'Delete'}/>

    </li>
)
    
}

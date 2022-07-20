import { ContactsItem } from "components/ContactsItem/ContactsItem"

export const ContsctsList=({contacts})=>{

return ( 
<ul>
    {contacts.map(({id, name, number})=> <ContactsItem key={id} name={name} number={number}/>

    )}
</ul>
)

}

import { Component } from "react"
import { Input } from "./Input/Input";
import { Form } from "../components/Form/Form";
import {Section} from "./Section/Section";
import { Button } from "./Button/Button";
import { ContsctsList } from "./ContactsList/ContactsList";
export class App  extends Component{

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  
pattern = "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"







render() { return (
 <>
  <Section title={'PhoneBook'}>
    <Form>
<Input name={'Name'} pattern={this.pattern}/>
<Input name={'Number'}/>

<Button name={"Add contact"}/>
    </Form>
  </Section>
  <Section title={'Contacts'}>
  <Form>
  <Input name={'Find contacts by name'}/>
  <ContsctsList contacts={this.state.contacts}/>
  </Form>
  </Section>
  </>
  );}
};

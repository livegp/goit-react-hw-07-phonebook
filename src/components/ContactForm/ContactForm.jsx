import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Btn, Form, List } from './ContactForm.styled';
import { addContact, selectList } from '../../redux/listSlice';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectList);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = ({ target: { name: inputName, value } }) => {
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    const isNumberExist = contacts.some(contact => contact.number === number);

    if (isNumberExist) {
      alert(`The number ${number} is already in contacts`);
      return;
    }

    const newData = { id: nanoid(5), name, number };
    dispatch(addContact(newData));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ul>
        <List>
          <label htmlFor={nameId}>Name</label>
          <input
            type="text"
            id={nameId}
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </List>
        <List>
          <label htmlFor={numberId}>Number</label>
          <input
            type="tel"
            id={numberId}
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </List>
      </ul>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}

export default ContactForm;

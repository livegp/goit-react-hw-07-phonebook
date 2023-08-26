import { useDispatch, useSelector } from 'react-redux';

import { Head, Table } from './ContactList.styled';
import { selectFilter } from '../../redux/filterSlice';
import { deleteContact, selectList } from '../../redux/listSlice';

function ContactList() {
  const contacts = useSelector(selectList);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!visibleContactList.length) {
    return <p>No contacts</p>;
  }

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Table>
      <Head>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>x</th>
        </tr>
      </Head>
      <tbody>
        {visibleContactList.map(({ id, name, number }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <button type="button" onClick={() => handleDelete(id)}>
                x
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ContactList;

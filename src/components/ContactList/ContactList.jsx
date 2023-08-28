import { TiDeleteOutline, TiEdit } from 'react-icons/ti';
import { toast } from 'react-toastify';

import { Head, Table } from './ContactList.styled';
import {
  useDeleteContactMutation,
  useGetContactsQuery
} from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';

function ContactList() {
  const {
    data: contacts,
    error: isGetError,
    isLoading: isGetLoading
  } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleteLoading }] =
    useDeleteContactMutation();

  const handleDelete = async id => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully');
    } catch (error) {
      toast.error('Error deleting contact:', error);
    }
  };

  if (isGetLoading) {
    return <Loader />;
  }

  if (isGetError) {
    return toast.error('Error deleting contact:', isGetError);
  }

  if (!contacts.length) {
    return <p>No contacts</p>;
  }

  return (
    <Table>
      <Head>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>
            <TiEdit size={20} />
          </th>
          <th>
            <TiDeleteOutline size={20} />
          </th>
        </tr>
      </Head>
      <tbody>
        {contacts.map(({ id, name, phone }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>
              <button type="button">
                <TiEdit size={20} />
              </button>
            </td>
            <td>
              <button
                type="button"
                disabled={isDeleteLoading}
                onClick={() => handleDelete(id)}
              >
                <TiDeleteOutline size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ContactList;

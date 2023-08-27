import { ToastContainer } from 'react-toastify';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

function Home() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer position="top-right" />
    </>
  );
}

export default Home;

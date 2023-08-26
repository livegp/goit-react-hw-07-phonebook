import ContactForm from '../components/ContactForm/ContactForm';
import { Title } from '../components/ContactForm/ContactForm.styled';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { SubTitle } from '../components/Filter/Filter.styled';

function Home() {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </>
  );
}

export default Home;

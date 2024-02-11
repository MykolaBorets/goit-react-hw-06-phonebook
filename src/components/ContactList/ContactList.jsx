import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
	const contacts = useSelector(state => state.contacts.contacts);
	const filter = useSelector(state => state.contacts.filter);

	const getFilteredContacts = (contacts, filter) => {
		if (!filter) {
			return contacts;
		}
		return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
	};

	const filteredContacts = getFilteredContacts(contacts, filter);
	return (
		<ul>
			{filteredContacts.map(({ id, name, number }) => {
				return <ContactItem key={id} id={id} name={name} number={number} />;
			})}
		</ul>
	);
};
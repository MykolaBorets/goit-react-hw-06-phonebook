import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
	name: 'phonebook',
	initialState: {
		contacts: [],
		filter: '',
	},

	reducers: {
		addContact(state, action) {
			const newContact = action.payload;
			const newName = newContact.name;
			const { contacts } = state;

			const existsContact = contacts.some(
				({ name }) => name.toLowerCase() === newName.toLowerCase()
			);

			if (existsContact) {
				alert(`${newName} is already in contacts`);
				return;
			}

			newContact.id = nanoid();

			contacts.push(newContact);
		},

		deleteContact(state, action) {
			const { contacts } = state;
			const idDeleteContact = action.payload;
			console.log(action);
			const index = contacts.findIndex(({ id }) => id === idDeleteContact);

			contacts.splice(index, 1);
		},

		setFilter(state, action) {
			state.filter = action.payload.toLowerCase();
		},
	},
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
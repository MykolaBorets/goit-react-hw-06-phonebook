import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
	const dispatch = useDispatch();
	const handleDelete = () => dispatch(deleteContact(id));
	return (
		<li className={css.item}>
			{name}: {number}
			<button type="button" onClick={handleDelete} className={css.btn}>
				Delete
			</button>
		</li>
	);
};

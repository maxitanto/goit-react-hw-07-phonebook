import React, { useEffect } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { fetchContacts } from 'redux/thunk';
import { getFilterValue } from 'redux/filterSlice';
import { contactsSelector, loadingSelector } from 'redux/selectors';

export function ContactList() {
  const items = useSelector(contactsSelector);
  const filtered = useSelector(getFilterValue);
  const isLoading = useSelector(loadingSelector);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <span className={css.loader}></span>;
  }
  if (items.length && filteredContacts.length) {
    return (
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id} className={css.listItem}>
            <ContactListItem name={name} number={phone} id={id} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <h2 className={css.title}>Not found</h2>;
  }
}

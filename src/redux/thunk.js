import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContacts, deleteContacts, getContacts } from 'api/contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  getContacts()
);

export const addContact = createAsyncThunk('contacts/addContact', data => {
  return createContacts(data);
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteContacts(id)
);

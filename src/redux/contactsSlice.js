import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handleFulfilledCreate,
  handleFulfilledDel,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from 'services/functionsSlice';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './thunk';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledCreate)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactReducer = contactsSlice.reducer;

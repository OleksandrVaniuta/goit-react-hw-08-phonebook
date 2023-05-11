export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectFiltredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const normalizeFilter = filter.toLocaleLowerCase();
  if (filter === ' ') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeFilter)
  );
};

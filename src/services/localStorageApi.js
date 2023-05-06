const keys = {
  CONTACTS: 'contacts',
};

export const getContacts = () => {
  try {
    const contacts = JSON.parse(localStorage.getItem(keys.CONTACTS));
    return contacts ? contacts : [];
  } catch {
    return [];
  }
};

export const setContacts = contacts => {
  try {
    localStorage.setItem(keys.CONTACTS, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

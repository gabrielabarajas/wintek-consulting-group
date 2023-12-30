import { db, collection, addDoc, serverTimestamp } from './database';

const createEmail = (contact) => ({
  to: ['jemerinoarango@hotmail.com'],
  message: {
    subject: 'New contact from: '+ contact.fullname,
    text: contact.email + '-' + contact.phone,
    html: contact.message,
  }

});

export const createContact = async (contact) => {
  const contactsRef = collection(db, 'contacts');
  const data = await addDoc(contactsRef, { ...createEmail(contact), postedAt: serverTimestamp() });
  return data.id;
};


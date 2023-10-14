import { db, collection, addDoc, serverTimestamp } from './database';

export const createContact = async (contact) => {
  const contactsRef = collection(db, 'contacts');
  const data = await addDoc(contactsRef, { ...contact, postedAt: serverTimestamp() });
  return data.id;
};
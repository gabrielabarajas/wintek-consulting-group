import './app';

import { getFirestore } from 'firebase/firestore/lite';

export {
  collection,
  getDoc,
  doc,
  getDocs,
  query,
  limit,
  addDoc,
  updateDoc,
  serverTimestamp,
  where,
} from 'firebase/firestore/lite';

export const db = getFirestore();
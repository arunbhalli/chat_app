import react, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../misc/firebase';
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(authObj => {
      console.log('authObj', authObj);
    });
  });

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

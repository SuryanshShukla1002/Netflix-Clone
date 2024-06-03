import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../services/Firebase';
import { createImageUrl } from '../services/movieServices';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [movies, setMovies] = useState([])
  const {user } = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db , 'users', `${user.email}`), (doc) => {
        if(doc.data()) setMovies(doc.data().favShows)
      })
    }
  }, [user?.email])

  // console.log(movies);

  if (!user){
    return <><p>Fetching Shows</p></>
  }

  return <div>Profile</div>;
};
export default Profile;

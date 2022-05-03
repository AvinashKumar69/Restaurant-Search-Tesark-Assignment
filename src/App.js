import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';


function App() {
  const [restaurentsData, setRestaurentsData] = useState([])
  const restaurentsDataCollectionRef = collection(db, "restaurentsData")

  useEffect(() => {

    const getRestaurentsData = async () => {
      const data = await getDocs(restaurentsDataCollectionRef)
      console.log('data:-', data);
      setRestaurentsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getRestaurentsData()

  }, [])

  console.log('restaurentsData logged:-', restaurentsData);

  return (
    <>
      <Home />
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Home = () => {
  // Correct syntax for initializing state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array for one-time fetch

  return <ItemListContainerComponent productsData={products} />;
};

export default Home;
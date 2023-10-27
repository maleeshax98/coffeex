import React, { useEffect, useState } from 'react'
import { db } from '../firebase/db';
import { collection, getDocs } from 'firebase/firestore';

export default function useGetMenu(menu) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    const getData = async (menu) => {
        const menuItemsCollection = collection(db, menu); // Replace 'menuItems' with the actual name of your collection

        try {
            const querySnapshot = await getDocs(menuItemsCollection);

            const lunchMenuData = [];
                querySnapshot.forEach((doc) => {
                lunchMenuData.push(doc.data());
            });

            console.log(lunchMenuData)

            setData(lunchMenuData);
        } catch (error) {
            console.error('Error fetching data from Firestore: ', error);
        }
    }

    useEffect(() => {
        getData(menu)
    }, [menu]);

    return { data }
}

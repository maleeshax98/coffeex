import { collection, addDoc } from 'firebase/firestore';
import { app, db } from '../firebase/db';

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function useAddOrder() {
    // const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [id, setId] = useState(null)

    const add = async (name, item, items) => {
        setError(null)

        if(!name.trim()){
            setError("Please enter your name")
            return;
        }

        if(!items.trim()){
            setError("Please enter items count")
            return;
        }

        const uuid = uuidv4();
        const data = {
            name,
            item,
            uid: uuid,
            items
        }

        try {
            const res = await addDoc(collection(db, 'preOrders'), data);
            setId(uuid)
            // Convert the array to a JSON string

            // const jsonString = JSON.stringify({ uuid });
            // // Store the JSON string in localStorage with a specific key
            // localStorage.setItem('ids', jsonString);

            console.log('Pre Order to Firebase successfully');
            setError(null)

        } catch (error) {
            setError("Somthing went wrong")
            console.error('Error adding menu data to Firebase: ', error);
        }


    }

    return { error, id, add }
}

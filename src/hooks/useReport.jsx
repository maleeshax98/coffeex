import { collection, addDoc } from 'firebase/firestore';
import { app, db } from '../firebase/db';

import React, { useState } from 'react'

export default function useReport() {
    // const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const add = async (name, content) => {
        setError(null)
        setLoading(true)
        if(!name.trim()){
            setError("Please enter your name")
            return;
        }

        if(!content.trim()){
            setError("Please enter content")
            return;
        }

        const data = {
            name,
            content,
        }

        try {
            const res = await addDoc(collection(db, 'reports'), data);
            // Convert the array to a JSON string

            // const jsonString = JSON.stringify({ uuid });
            // // Store the JSON string in localStorage with a specific key
            // localStorage.setItem('ids', jsonString);
            setLoading(false)

            console.log('Pre Order to Firebase successfully');
            setError(null)
            alert("Report added successfull")

        } catch (error) {
            setLoading(false)

            setError("Somthing went wrong")
            console.error('Error adding menu data to Firebase: ', error);
        }


    }

    return { error, add, loading }
}

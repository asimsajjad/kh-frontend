import React, { useEffect, useState} from "react";
import PopularServices from './components/pages/home/PopularServices';
import axios from "axios";

export default function Parent(){
    const [notes, getNotes] = useState('');
    const url= 'http://localhost/khadim-hazir/api/sevenCategories'; 

    useEffect (() => {
        getAllNtotes ();
    }, []);

    const getAllNtotes = () => {
        axios.get(`${url}past`)
        .then((response) => {
            const allNotes = response.data.allNotes;
            getNotes(allNotes)
        })
        .catch(error => console.error (`Error: ${error}`));
    }
    return (
        <PopularServices notes={notes}/>
    )
}
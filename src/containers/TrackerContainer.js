import { useState } from 'react';
import TrackerDisplay from "../components/TrackerDisplay";
import FormContainer from "./FormContainer";
import UserContext from '../context/UserContext';
import Header from '../components/Header';

export const TrackerContainer = () => {

    const [glasses, setGlasses] = useState(0);
    

    const handleUpdate = (updateAmount) => {
        if (glasses + updateAmount < 0) {
            setGlasses(0);
        }
        else {
            setGlasses(parseInt(glasses + updateAmount));
        }
    }

    const handleEmpty = () => {
        setGlasses(0);
    }

    return (
        <>
            <TrackerDisplay  glasses = {glasses}/>
            <FormContainer handleUpdate={handleUpdate} handleEmpty={handleEmpty} />
            <Header/>
        
        </>
    )
    }

export default TrackerContainer;

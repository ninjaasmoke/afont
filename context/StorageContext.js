import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { useContext, createContext, useState, useEffect } from 'react'

const StorageContext = createContext();

export function StorageWrapper({ children }) {

    const doDatabaseStuff = async () => {
        const db = await openDB('Assignmentium', 1, {});
        console.log(db)
        return db
    }

    useEffect(() => {
        doDatabaseStuff()
    }, [])

    return (
        <StorageContext.Provider value={{}} >
            {children}
        </StorageContext.Provider>
    )
}
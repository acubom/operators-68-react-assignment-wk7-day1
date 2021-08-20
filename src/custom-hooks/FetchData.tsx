import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [CarData, setData] = useState<any>([]);

    const handleFetchData = async () => {
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleFetchData();
    }, [])

    return {CarData, getData:handleFetchData}
}
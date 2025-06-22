import { useState, useEffect } from 'react';

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log('Interval cleared to prevent memory leak.');
        };
    }, []);

    return currentTime;
};

export default useCurrentTime;

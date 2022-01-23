import { useEffect, useState } from 'react';
import { MAX_SM_SCREEN_SIZE } from '../../constants/Screen';

const useDetectMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= MAX_SM_SCREEN_SIZE);
    }

    useEffect(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        }
    });

    return isMobile;
}

export default useDetectMobile;
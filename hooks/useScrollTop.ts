import { useState, useRef, useLayoutEffect } from 'react';

const useScrollTop = () => {
    const [top, setTop] = useState(0);
    const ref = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const element = ref?.current

        function getTopPosition() {
            const topPosition = element?.scrollTop;
            if (topPosition) {
                setTop(topPosition);
            }
        }
        element?.addEventListener('scroll', getTopPosition);
        getTopPosition();
        return () => element?.removeEventListener('scroll', getTopPosition);
    }, []);

    return [ref, top];
}

export default useScrollTop;
import { activeSectionIcon } from './activeSectionIcon';

export const intersectionObserver = element => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
    };

    const observer = new IntersectionObserver(activeSectionIcon, options);

    observer.observe(element);
};

export const toSection = section => {
    document.getElementById(section).scrollIntoView({
        behavior: 'smooth',
    });
};

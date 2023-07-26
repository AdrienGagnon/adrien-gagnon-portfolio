export const lazyLoading = element => {
    function loaded() {
        element.classList.add('loaded');
    }

    if (element.complete) {
        loaded();
    } else {
        element.addEventListener('load', loaded);
    }
};

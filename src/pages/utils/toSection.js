import store from '../../store';
import { sectionTransitionsActions } from '../../store/sectionTransitions-slice';

export const toSection = section => {
    const state = store.getState();
    if (state.activeSection.activeSection === 'header') {
        !state.sectionTransitions.headerOut &&
            store.dispatch(sectionTransitionsActions.handleHeaderTransition());
        // setTimeout(() => {
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
        });
        // }, 1000);
    } else {
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
        });
    }
};

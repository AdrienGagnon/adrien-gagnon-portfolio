import store from '../../store';
import { activeSectionActions } from '../../store/activeSection-slice';
import { sectionTransitionsActions } from '../../store/sectionTransitions-slice';

export const activeSectionIcon = entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    if (
        entry.target.id === 'header' &&
        store.getState().sectionTransitions.headerOut
    ) {
        store.dispatch(sectionTransitionsActions.handleHeaderTransition());
    }
    store.dispatch(activeSectionActions.newActiveSection(entry.target.id));
};

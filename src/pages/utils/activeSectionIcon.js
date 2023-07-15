import store from '../../store';
import { activeSectionActions } from '../../store/activeSection-slice';

export const activeSectionIcon = entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    store.dispatch(activeSectionActions.newActiveSection(entry.target.id));
};

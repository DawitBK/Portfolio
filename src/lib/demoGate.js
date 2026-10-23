import { useDemoStore } from '../store/demoStore';
import { openExternal } from './nav';

// Click handler for a link to a live demo. When the demo server is known to be offline the visitor gets the "please try
// again" dialog instead of an error page; otherwise the link works as normal (new tab, no extra step).
export const gateClick = (url) => (event) => {
    const { status, openDialog } = useDemoStore.getState();
    if (status !== 'offline') return;
    event.preventDefault();
    openDialog(url);
};

// The same rule for places that open a demo from code (the command palette).
export function openDemo(url) {
    const { status, openDialog } = useDemoStore.getState();
    if (status === 'offline') openDialog(url);
    else openExternal(url);
}

import { render } from 'preact';

// App =>
import { App } from '@/app';

// Styles =>
import '@/styles/globals.css';

render(<App />, document.getElementById('app') as HTMLElement);

import type {ReactNode} from 'react';

export type AppIconName = 'files' | 'logs' | 'api' | 'database' | 'mocks' | 'tools' | 'services' | 'settings';

const paths: Record<AppIconName, ReactNode> = {
    files: <path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>,
    logs: <><path d="M6 3h9l3 3v15H6Z"/><path d="M9 10h6M9 14h6M9 18h4"/></>,
    api: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/></>,
    mocks: <><path d="M4 4h16v12H9l-5 4Z"/><path d="M8 8h8M8 12h5"/></>,
    tools: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17h7m-3.5-3.5v7"/></>,
    services: <><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M12 7h5M12 18h5"/></>,
    settings: <><path d="M3 6h4m4 0h10M3 12h10m4 0h4M3 18h4m4 0h10"/><circle cx="9" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="9" cy="18" r="2"/></>,
};

export default function HomepageAppIcon({name}: {name: AppIconName}): ReactNode {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {paths[name]}
        </svg>
    );
}

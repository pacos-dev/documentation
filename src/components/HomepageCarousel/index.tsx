import {useRef, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';
import AppIcon, {type AppIconName} from '@site/src/components/HomepageAppIcon';
import styles from '@site/src/pages/index.module.css';

const tools = [
    {
        icon: 'files',
        name: 'Files / Explorer',
        image: 'fileexplorer',
        width: 2236,
        height: 1014,
        alt: 'Explorer file manager showing application folders, files and file operations in PacOS',
        caption: 'Explorer: browse and manage application files without a server shell.',
    },
    {
        icon: 'logs',
        name: 'Logs / Glogg',
        image: 'glogg',
        width: 2236,
        height: 1014,
        alt: 'Glogg log viewer showing a log file and search controls inside PacOS',
        caption: 'Glogg: inspect and search large log files from the same interface.',
    },
    {
        icon: 'api',
        name: 'APIs / ApiNity',
        image: 'apiniti',
        width: 2236,
        height: 1014,
        alt: 'ApiNity API client with request configuration and response details in PacOS',
        caption: 'ApiNity: send REST and SOAP requests to application services.',
    },
    {
        icon: 'mocks',
        name: 'Mocks / MockServer',
        image: 'mock',
        width: 2236,
        height: 1014,
        alt: 'MockServer showing shared REST and SOAP mock projects and response configuration in PacOS',
        caption: 'MockServer: configure mock responses for a shared test environment.',
    },
    {
        icon: 'database',
        name: 'Database',
        image: 'database',
        width: 2236,
        height: 1014,
        alt: 'PacOS Database tool with database connections, schemas, tables and a SQL query editor',
        caption: 'Database: browse schemas and tables, and run queries from PacOS.',
    },
    {
        icon: 'tools',
        name: 'App Center',
        image: {light: 'appcenter', dark: 'app_center'},
        width: 2236,
        height: 1014,
        alt: 'PacOS App Center showing available applications',
        caption: 'App Center: discover applications available in your environment.',
    },
    {
        icon: 'settings',
        name: 'Settings',
        image: 'settings',
        width: 2236,
        height: 1014,
        alt: 'PacOS Settings showing configuration options',
        caption: 'Settings: configure your PacOS environment.',
    },
] satisfies {icon: AppIconName; name: string; image: string | Record<'light' | 'dark', string>; width: number; height: number; alt: string; caption: string}[];

export default function HomepageCarousel({selectedIndex, onSelect}: {
    selectedIndex: number;
    onSelect: (index: number) => void;
}): ReactNode {
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const {colorMode} = useColorMode();
    const selected = tools[selectedIndex];
    const imageName = typeof selected.image === 'string' ? selected.image : selected.image[colorMode];
    const imageUrl = useBaseUrl(`/img/screens/${colorMode}/${imageName}.png`);

    return (
        <div className={styles.appWindow}>
            <div className={styles.toolPicker} role="tablist" aria-label="PacOS applications">
                {tools.map((tool, index) => (
                    <button
                        key={tool.name}
                        type="button"
                        role="tab"
                        id={`tool-tab-${index}`}
                        ref={element => {tabRefs.current[index] = element;}}
                        tabIndex={selectedIndex === index ? 0 : -1}
                        className={styles.toolButton}
                        aria-selected={selectedIndex === index}
                        aria-controls="tool-preview"
                        onClick={() => onSelect(index)}
                        onKeyDown={event => {
                            const next = event.key === 'ArrowRight' ? (index + 1) % tools.length
                                : event.key === 'ArrowLeft' ? (index + tools.length - 1) % tools.length
                                : event.key === 'Home' ? 0
                                : event.key === 'End' ? tools.length - 1 : undefined;
                            if (next !== undefined) {
                                event.preventDefault();
                                onSelect(next);
                                tabRefs.current[next]?.focus();
                            }
                        }}>
                        <AppIcon name={tool.icon}/>
                        {tool.name}
                    </button>
                ))}
            </div>
            <div id="tool-preview" role="tabpanel" aria-labelledby={`tool-tab-${selectedIndex}`} tabIndex={0}>
                <figure className={styles.productFigure}>
                    <img
                        key={imageUrl}
                        className={styles.productImage}
                        style={{width: selected.width * 0.85}}
                        src={imageUrl}
                        alt={selected.alt}
                        width={selected.width}
                        height={selected.height}
                        loading="lazy"
                    />
                    <figcaption aria-live="polite">{selected.caption}</figcaption>
                </figure>
            </div>
        </div>
    );
}

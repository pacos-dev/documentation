import {useState, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

const tools = [
    {
        name: 'Files / Explorer',
        src: '/img/screens/explorer.jpg',
        width: 1890,
        height: 1052,
        alt: 'Explorer file manager showing application folders, files and file operations in PacOS',
        caption: 'Explorer: browse and manage application files without a server shell.',
    },
    {
        name: 'Logs / Glogg',
        src: '/img/screens/logs.jpg',
        width: 1884,
        height: 1052,
        alt: 'Glogg log viewer showing a log file and search controls inside PacOS',
        caption: 'Glogg: inspect and search large log files from the same interface.',
    },
    {
        name: 'APIs / ApiNity',
        src: '/img/screens/apinity.jpg',
        width: 1884,
        height: 1052,
        alt: 'ApiNity API client with request configuration and response details in PacOS',
        caption: 'ApiNity: send REST and SOAP requests to application services.',
    },
    {
        name: 'Mocks / MockServer',
        src: '/img/screens/mock.jpg',
        width: 1884,
        height: 1052,
        alt: 'MockServer showing shared REST and SOAP mock projects and response configuration in PacOS',
        caption: 'MockServer: configure mock responses for a shared test environment.',
    },
    {
        name: 'Database',
        src: '/img/screens/database.jpg',
        width: 1762,
        height: 1116,
        alt: 'PacOS Database tool with database connections, schemas, tables and a SQL query editor',
        caption: 'Database: connect to any database, browse schemas and tables, and run queries from PacOS.',
    },
];

export default function HomepageCarousel(): ReactNode {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = tools[selectedIndex];
    const imageUrl = useBaseUrl(selected.src);

    return (
        <div>
            <div className={styles.toolPicker} role="group" aria-label="Choose a PacOS tool to preview">
                {tools.map((tool, index) => (
                    <button
                        key={tool.name}
                        type="button"
                        className={styles.toolButton}
                        aria-pressed={selectedIndex === index}
                        aria-controls="tool-preview"
                        onClick={() => setSelectedIndex(index)}>
                        {tool.name}
                    </button>
                ))}
            </div>
            <figure id="tool-preview" className={styles.productFigure}>
                <img
                    key={selected.src}
                    className={styles.productImage}
                    src={imageUrl}
                    alt={selected.alt}
                    width={selected.width}
                    height={selected.height}
                    loading="lazy"
                />
                <figcaption aria-live="polite">{selected.caption}</figcaption>
            </figure>
        </div>
    );
}

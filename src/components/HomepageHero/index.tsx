import React from 'react';

export default function HomepageHero() {
    return (
        <section className="feature-border">
            <div className="container text--center" style={{padding: 20}}>
                <h1>Enterprise control plane for complex application environments</h1>

                <p>
                    Give developers, QA teams and testers a single web interface
                    to files, logs, services, APIs, mocks and tools across your
                    containerized environments.
                </p>

                <p>
                    Access the resources your teams need without giving them
                    direct access to the underlying infrastructure.
                </p>
            </div>
        </section>
    );
}
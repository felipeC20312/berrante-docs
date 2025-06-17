import React, { useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import './index.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/category/berrante-ng-system'>
            Documentação do Projeto
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePageContent() {
  const [dragActive, setDragActive] = useState(false);
  const [markdownFiles, setMarkdownFiles] = useState<
    { name: string; content: string }[]
  >([]);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);

    const files = Array.from(event.dataTransfer.files);
    const mdFiles = files.filter((file) => file.name.endsWith('.md'));

    mdFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setMarkdownFiles((prev) => [
          ...prev,
          { name: file.name, content: reader.result as string },
        ]);
      };
      reader.readAsText(file);
    });
  }, []);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragActive(true);
    },
    []
  );

  const handleDragLeave = useCallback(() => {
    setDragActive(false);
  }, []);

  const handleRemoveDoc = (itemId: number) => {
    setMarkdownFiles((prev) => prev.filter((_, index) => index !== itemId));
  };

  return (
    <div className='formContainer'>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{
          border: dragActive
            ? '2px dashed var(--ifm-color-primary-light)'
            : '2px dashed var(--border-01)',
          padding: '2rem',
          borderRadius: '.5rem',
          textAlign: 'center',
          width: '100%',
          backgroundColor: dragActive
            ? 'var(--color-primary-dimmed)'
            : 'var(--background-color-01)',
          transition: 'all 0.3s ease-in-out',
        }}>
        <p>
          {dragActive
            ? 'Solte os arquivos Markdown aqui...'
            : 'Arraste e solte arquivos .md para importar nova documentação'}
        </p>

        {markdownFiles.length > 0 && (
          <div style={{ textAlign: 'left', marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Arquivos importados:</h3>
            <ul className='list'>
              {markdownFiles.map((file, idx) => (
                <li key={idx} className='listItem'>
                  <strong style={{ marginBottom: '1rem' }}>{file.name}</strong>
                  <pre
                    style={{
                      backgroundColor: 'var(--background-color-01)',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      whiteSpace: 'pre-wrap',
                      wordWrap: 'break-word',
                      maxHeight: '200px',
                      overflowY: 'auto',
                    }}>
                    {file.content.substring(0, 500)}...
                  </pre>
                  <button onClick={() => handleRemoveDoc(idx)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {markdownFiles.length > 0 && (
        <button className=''>Confirmar Importação</button>
      )}
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main className='contentContainer'>
        <HomePageContent />
      </main>
    </Layout>
  );
}

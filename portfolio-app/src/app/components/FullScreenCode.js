// components/FullScreenCode.js

import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from '../styles/FullScreenCode.module.css';

const FullScreenCode = ({ code, language = 'javascript' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFullScreen = () => setIsOpen(true);
  const closeFullScreen = () => setIsOpen(false);

  return (
    <>
      <button className={styles.openButton} onClick={openFullScreen}>
        Show Full Screen Code
      </button>
      {isOpen && (
        <div className={styles.fullScreenOverlay} onClick={closeFullScreen}>
          <div 
            className={styles.fullScreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            <SyntaxHighlighter 
              language={language}
              style={atomOneDark}
              wrapLines={true}
              customStyle={{width: '100%', height: '100%', margin: 0}}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenCode;
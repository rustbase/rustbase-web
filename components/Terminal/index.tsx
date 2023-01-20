import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import dracula from './dracula.json';

import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

function Term() {
    useEffect(() => {
        const termElement = document.getElementById('terminal');
        const term = new Terminal({
            cursorStyle: 'block',
            cursorBlink: true,
            fontSize: 20,
            theme: {
                background: '#121214',
                ...dracula,
            },
            fontFamily: '"Source Code Pro", monospace',
        });

        if (termElement) {
            term.open(termElement);
            termElement.addEventListener('touchmove', function (e) {
                e.stopPropagation();
            });

            const fitAddon = new FitAddon();
            term.loadAddon(fitAddon);
            fitAddon.fit();

            window.onresize = () => {
                fitAddon.fit();
            };

            term.writeln('RUSTBASE> insert "something here" into key');
            term.writeln('\x1b[32m[Success]\x1b[0m ok');
            term.writeln('RUSTBASE> get key');
            term.writeln('"something here"');
            term.writeln('RUSTBASE> update "another thing..." into key');
            term.writeln('\x1b[32m[Success]\x1b[0m ok');
            term.writeln('RUSTBASE> delete key');
            term.writeln('\x1b[32m[Success]\x1b[0m ok');
            term.write('RUSTBASE> ');
        }

        return () => {
            term.dispose();
        };
    }, []);

    return <div id="terminal" className={styles.terminal}></div>;
}

export default Term;

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnipette = ({codeSnipette,example}) => {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <SyntaxHighlighter
                    language='javascript'
                    style={docco}
                    showLineNumbers
                >
                    {codeSnipette}
                </SyntaxHighlighter>
            </div>
            <div className='col-md-6 '>
                <div className='custom-concepts__subType-example mt-3'>
                    {example}
                    {/* {props.children}
                    <SimplePagination data={TESTDATA} /> */}
                </div>
            </div>
        </div>
    );
};

export default CodeSnipette;

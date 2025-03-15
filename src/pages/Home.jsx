import React, { useState } from 'react';

const JsxImageTransformer = () => {
    const [inputCode, setInputCode] = useState('');
    const [transformedCode, setTransformedCode] = useState('');
    const [leftCopyStatus, setLeftCopyStatus] = useState('Copy');
    const [rightCopyStatus, setRightCopyStatus] = useState('Copy');

    // Function to transform the JSX code
    const transformCode = () => {
        if (!inputCode) return;

        // Initialize data structures to track imports and replacements
        const imports = new Set();
        let modifiedCode = inputCode;

        // Regular expression to match img tags with src attributes
        const imgRegex = /<img\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/g;

        // Find all matches and process them
        const matches = [...inputCode.matchAll(imgRegex)];

        // Process each match
        matches.forEach(match => {
            const [fullMatch, preSrc, srcPath, postSrc] = match;

            // Extract the filename without extension
            const filePath = srcPath;
            const fileName = filePath.split('/').pop();
            const fileNameWithoutExt = fileName.split('.')[0];

            // Create a clean variable name (remove ALL symbols, not just hyphens)
            const varName = fileNameWithoutExt
                .replace(/[^a-zA-Z0-9]/g, '') // Remove all non-alphanumeric characters
                .replace(/^[0-9]/, ''); // If name starts with number, remove it

            // Add import statement
            imports.add(`import ${varName} from '${srcPath}';`);

            // Replace in the code
            const newImgTag = `<img ${preSrc}src={${varName}}${postSrc}>`;
            modifiedCode = modifiedCode.replace(fullMatch, newImgTag);
        });

        // Replace all href attributes with href="#"
        const hrefRegex = /href=["'](?!#)([^"']+)["']/g;
        modifiedCode = modifiedCode.replace(hrefRegex, 'href="#"');

        // Combine imports and modified JSX
        const importStatements = Array.from(imports).join('\n');
        setTransformedCode(importStatements ? importStatements + '\n\n' + modifiedCode : modifiedCode);
    };

    // Function to copy to clipboard
    const copyToClipboard = (text, side) => {
        navigator.clipboard.writeText(text).then(
            () => {
                if (side === 'left') {
                    setLeftCopyStatus('Copied!');
                    setTimeout(() => setLeftCopyStatus('Copy'), 2000);
                } else {
                    setRightCopyStatus('Copied!');
                    setTimeout(() => setRightCopyStatus('Copy'), 2000);
                }
            },
            (err) => {
                console.error('Could not copy text: ', err);
                if (side === 'left') {
                    setLeftCopyStatus('Failed!');
                    setTimeout(() => setLeftCopyStatus('Copy'), 2000);
                } else {
                    setRightCopyStatus('Failed!');
                    setTimeout(() => setRightCopyStatus('Copy'), 2000);
                }
            }
        );
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="bg-blue-600 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">JSX Image Transformer</h1>
                <p className="text-sm">Transform HTML img tags to React imported components</p>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Side - Input */}
                <div className="w-1/2 p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Input JSX</h2>
                        <button
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm transition-colors"
                            onClick={() => copyToClipboard(inputCode, 'left')}
                            disabled={!inputCode}
                        >
                            {leftCopyStatus}
                        </button>
                    </div>
                    <textarea
                        className="flex-1 p-3 border border-gray-300 rounded shadow-inner font-mono text-sm resize-none"
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        placeholder='Paste your JSX code here with <img> tags...'
                    />
                    <button
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                        onClick={transformCode}
                        disabled={!inputCode}
                    >
                        Transform
                    </button>
                </div>

                {/* Right Side - Output */}
                <div className="w-1/2 p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Transformed JSX</h2>
                        <button
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm transition-colors"
                            onClick={() => copyToClipboard(transformedCode, 'right')}
                            disabled={!transformedCode}
                        >
                            {rightCopyStatus}
                        </button>
                    </div>
                    <textarea
                        className="flex-1 p-3 border border-gray-300 rounded shadow-inner font-mono text-sm resize-none bg-gray-50"
                        value={transformedCode}
                        readOnly
                        placeholder='Transformed code will appear here...'
                    />
                </div>
            </div>

            <footer className="bg-gray-200 p-2 text-center text-sm text-gray-600">
                Transforms: Image tags to imports | All hrefs to "#"
            </footer>
        </div>
    );
};

export default JsxImageTransformer;
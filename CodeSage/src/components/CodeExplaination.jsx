import React from 'react'
import Markdown from 'react-markdown'
import remarkGFM from 'remark-gfm'

const CodeExplaination = ({ explanation }) => {
    return (
        <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg mt-6">
            <h2 className="text-xl font-semibold mb-4">Explanation :</h2>
            <Markdown
                remarkPlugins={[remarkGFM]}
                components={{
                    h2: ({ children }) => (
                        <h2 className="text-lg font-bold mt-4 mb-2 text-blue-600">
                            {children}
                        </h2>
                    ),
                    p: ({ children }) => (
                        <p className="mb-2 text-gray-700">{children}</p>
                    ),
                    li: ({ children }) => (
                        <li className="ml-4 list-disc">{children}</li>
                    ),
                    code: ({ inline, children }) =>
                        inline ? (
                            <code className="bg-gray-200 px-1 rounded">
                                {children}
                            </code>
                        ) : (
                            <pre className="bg-gray-200 text-green-400 p-3 rounded-lg overflow-x-auto mb-4 mt-1">
                                <code>{children}</code>
                            </pre>
                        ),
                }}
            >
                {explanation}
            </Markdown>
            {/* <p>{explanation}</p> */}

        </div>
    )
}

export default CodeExplaination
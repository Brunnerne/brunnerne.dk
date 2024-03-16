import React from "react"
import rehypeRaw from 'rehype-raw'
import Markdown from 'react-markdown'

export default function MarkdownHTML(props: { content: string, className?: string, includeHTML?: boolean }) {
    let includeHTML = props.includeHTML;

    if (props.includeHTML === undefined) {
        includeHTML = false;
    }

    const plugins: any[] = [];
    if (props.includeHTML) {
        plugins.push(rehypeRaw);
    }

    return (
        <Markdown
            className={props.className}
            rehypePlugins={plugins}
            components={{
                h1: ({ node, ...props }) => <h1 className="text-4xl font-bold" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-3xl font-bold" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl font-bold" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-xl font-bold" {...props} />,
                h5: ({ node, ...props }) => <h5 className="text-lg font-bold" {...props} />,
                h6: ({ node, ...props }) => <h6 className="text-base font-bold" {...props} />,
                p: ({ node, ...props }) => <p className="text-base my-3" {...props} />,
                a: ({ node, ...props }) => <a className="link" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside" {...props} />,
                li: ({ node, ...props }) => <li className="text-base" {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4" {...props} />,
                hr: ({ node, ...props }) => <hr className="border-gray-300" {...props} />,
                table: ({ node, ...props }) => <table className="table-auto" {...props} />,
                thead: ({ node, ...props }) => <thead className="border-b-2 border-gray-300" {...props} />,
                tbody: ({ node, ...props }) => <tbody {...props} />,
                tr: ({ node, ...props }) => <tr className="border-b-2 border-gray-300" {...props} />,
                th: ({ node, ...props }) => <th className="px-4 py-2" {...props} />,
                td: ({ node, ...props }) => <td className="px-4 py-2" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                em: ({ node, ...props }) => <em className="italic" {...props} />,
                del: ({ node, ...props }) => <del className="line-through" {...props} />,
                code: ({ node, ...props }) => <code className="bg-gray-100 rounded p-1" {...props} />,
                img: ({ node, ...props }) => <img className="w-full" {...props} />,
            }}
        >
            {props.content}
        </Markdown>
    )
}
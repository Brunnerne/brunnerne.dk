import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-2xl font-bold" {...props} />,
    h4: (props) => <h4 className="text-xl font-bold" {...props} />,
    h5: (props) => <h5 className="text-lg font-bold" {...props} />,
    h6: (props) => <h6 className="text-base font-bold" {...props} />,
    p: (props) => <p className="text-base my-3" {...props} />,
    a: (props) => <a className="link" {...props} />,
    ul: (props) => <ul className="list-disc list-inside" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside" {...props} />,
    li: (props) => <li className="text-base" {...props} />,
    blockquote: (props) => <blockquote className="border-l-4 border-gray-300 pl-4" {...props} />,
    hr: (props) => <hr className="border-gray-300" {...props} />,
    table: (props) => <table className="table-auto" {...props} />,
    thead: (props) => <thead className="border-b-2 border-gray-300" {...props} />,
    tbody: (props) => <tbody {...props} />,
    tr: (props) => <tr className="border-b-2 border-gray-300" {...props} />,
    th: (props) => <th className="px-4 py-2" {...props} />,
    td: (props) => <td className="px-4 py-2" {...props} />,
    strong: (props) => <strong className="font-bold" {...props} />,
    em: (props) => <em className="italic" {...props} />,
    del: (props) => <del className="line-through" {...props} />,
    code: (props) => <code className="bg-gray-100 rounded p-1" {...props} />,
    img: (props) => <img className="w-full" {...props} />,
  }
}
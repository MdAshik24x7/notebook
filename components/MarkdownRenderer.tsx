import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-slate md:prose-lg max-w-none font-[Hind_Siliguri] leading-relaxed prose-headings:font-bold prose-headings:text-teal-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-teal-800 prose-a:text-teal-600 prose-code:text-pink-600 prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-pre:shadow-lg prose-img:rounded-xl prose-img:shadow-md">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match;
            return isInline ? (
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 border border-slate-200" {...props}>
                {children}
              </code>
            ) : (
              <div className="relative group my-6">
                <div className="absolute top-0 right-0 px-3 py-1 text-xs text-slate-400 font-mono uppercase bg-slate-800 rounded-bl-lg rounded-tr-lg border-b border-l border-slate-700">
                   {match?.[1] || 'code'}
                </div>
                <code className={`block bg-slate-900 text-slate-200 p-5 rounded-xl text-sm font-mono overflow-x-auto border border-slate-700 shadow-lg`} {...props}>
                  {children}
                </code>
              </div>
            );
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  {children}
                </table>
              </div>
            );
          },
          thead({ children }) {
            return <thead className="bg-slate-50">{children}</thead>;
          },
          th({ children }) {
            return (
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 whitespace-nowrap">
                {children}
              </th>
            );
          },
          td({ children }) {
            return <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-100 last:border-0 min-w-[120px]">{children}</td>;
          },
          blockquote({ children }) {
             return <blockquote className="border-l-4 border-teal-500 pl-6 italic bg-teal-50/50 py-4 pr-4 my-6 rounded-r-lg text-teal-900 shadow-sm">{children}</blockquote>
          },
          ul({ children }) {
            return <ul className="list-disc pl-6 space-y-2 my-4 marker:text-teal-500">{children}</ul>
          },
          ol({ children }) {
            return <ol className="list-decimal pl-6 space-y-2 my-4 marker:text-teal-500 marker:font-bold">{children}</ol>
          },
          h1({ children }) {
            return <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-8 pb-4 border-b border-slate-100">{children}</h1>
          },
          h2({ children }) {
            return <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-teal-900">{children}</h2>
          },
          h3({ children }) {
            return <h3 className="text-lg md:text-xl font-semibold mb-3 mt-6 text-teal-800">{children}</h3>
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
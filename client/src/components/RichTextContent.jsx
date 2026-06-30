import DOMPurify from 'dompurify';

const RichTextContent = ({ html, className = '' }) => {
  if (!html) return null;

  const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

  return (
    <div
      className={`rich-text-content ${className}`}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default RichTextContent;

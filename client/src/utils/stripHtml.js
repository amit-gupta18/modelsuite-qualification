export const stripHtml = (html = '') =>
  html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

export const normalizeDescription = (html = '') =>
  stripHtml(html) ? html : '';

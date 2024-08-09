export const getShortLink = (slug: string) => {
  return `${import.meta.env.VITE_APP_URL}/${slug}`;
};

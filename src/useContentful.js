import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "atfxo4m4dpia",
    accessToken: "dmf55758__jF4yP1obVwEHCRjkoQ1l4YpM6yXsa-rrQ",
    host: "preview.contentful.com",
  });
  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "authors",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors: ${error}`);
    }
  };
  return { getAuthors };
};
export default useContentful;

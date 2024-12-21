export const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\u0100-\u017F\s-]/g, '') // Lotin alifbosi va o'zbek harflari uchun
      .trim()
      .replace(/[\s\W-]+/g, '-');
  };
  
  export const slugToTitle = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  
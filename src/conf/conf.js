const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_DATABASE_ID),
};

export default conf;

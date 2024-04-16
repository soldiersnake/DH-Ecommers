/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_GOOGLE_KEY: string;
    // ... puedes declarar más variables aquí.
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
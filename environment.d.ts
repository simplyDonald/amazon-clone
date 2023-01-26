declare global {
  namespace NodeJS {
    interface ProcessEnv {
     GOOGLE_ID: string; // this is the line you want
     GOOGLE_SECRET: string; // this is the line you want
      PORT?: string;
      PWD?: string;
    }
  }
}

export {};

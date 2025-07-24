interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  // you can add more environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

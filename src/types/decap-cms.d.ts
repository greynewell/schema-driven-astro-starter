interface Window {
  CMS: {
    registerMediaLibrary: (config: {
      name: string;
      init: () => {
        showMediaLibrary: () => void;
        hideMediaLibrary: () => void;
        enableStandalone: () => boolean;
      };
    }) => void;
  };
} 
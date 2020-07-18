import React from 'react';

const projectConfigs = {
  dev: {
    shortName: 'dev',
    name: 'Staging',
    project: 'ballotfyi-dev',
  },
  prd: {
    shortName: 'prd',
    name: 'Production',
    project: 'ballotfyi',
  },
};

const FirebaseProjectContext = React.createContext(projectConfigs.dev);

FirebaseProjectContext.displayName = 'FirebaseProjectContext';

export { FirebaseProjectContext, projectConfigs };

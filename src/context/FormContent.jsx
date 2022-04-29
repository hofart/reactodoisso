import * as React from 'react';

export const HandleFormContentContext = React.createContext();

function Provider({ children }) {
  const [state, setState] = React.useState(false);

  const value = React.useMemo(() => ({
    state, setState,
  }), [state]);

  return (
    <HandleFormContentContext.Provider value={value}>
      {children}
    </HandleFormContentContext.Provider>
  );
}

export default Provider;

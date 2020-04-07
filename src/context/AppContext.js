import React from 'react';
import { Text, StyleSheet } from 'react-native';
const AppContext = React.createContext();
export const EzCareProvider = ({children}) => {
return(
<AppContext.Provider value={866}>
          {children}
</AppContext.Provider>
);

}

export default AppContext;
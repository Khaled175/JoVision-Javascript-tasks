import React from 'react';

const TextContext = React.createContext({
    sharedText: '',
    setSharedText: () => {},
});

export default TextContext;

import * as  React from 'react';


export interface WindowWidthContext {
    getWidth: () => number
}

export const Window_SuiM_Context : React.Context<WindowWidthContext> = React.createContext({ 
    getWidth: () => 1200
});
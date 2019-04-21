import * as React from 'react'
import { Window_SuiM_Context } from './constants';
import { getWidthFactory, responsivePropsInit } from './semantic';

export interface WindowWidthProps { getWidth: () => number; }

export class MqProvider extends React.Component<WindowWidthProps, {}> {
    static defaultProps = {
        getWidth: getWidthFactory(responsivePropsInit())
    }
    render() {
        return (
            <Window_SuiM_Context.Provider value={{ getWidth: this.props.getWidth }}>
                {this.props.children}
            </Window_SuiM_Context.Provider>
        )
    }
}

export * from './semantic'
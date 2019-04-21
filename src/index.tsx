import * as React from 'react'
import * as PropTypes from 'prop-types';
import { Window_SuiM_Context } from './constants';
import { widthFactory } from './semantic';

interface WindowWidthProps { width: () => number; }

export class MqProvider extends React.Component<WindowWidthProps, {}> {
    static defaultProps = {
        width: widthFactory()
    }
    static propTypes = {
        width: PropTypes.func.isRequired
    }
    render() {
        return (
            <Window_SuiM_Context.Provider value={{ getWidth: this.props.width }}>
                {this.props.children}
            </Window_SuiM_Context.Provider>
        )
    }
}

export * from './semantic'
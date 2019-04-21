### About
A React helper library built upon semantic-ui to make serving different components to different screens a breeze via server rendering or in browsers. Currently supports Mobile, Tablet and Desktop.

### Usage
This library is only compatible with React.

##### Install
```
npm install @cmdlucas/react-mediaquery prop-types semantic-ui-react mobile-detect
```
OR

##### Example
Say we had a root DOM element we wanted to render different contents to according to screen width change
```
import React from 'react'
import ReactDOM from 'react-dom'
import { MqProvider, MediaQuery, 
    desktopScreen, tabletScreen, mobileScreen 
} from 'react-mediaquery'

//It is required to use the Provider component as specified below before calling MediaQuery anywhere down the Tree

const Menu = props => {
    return (
        <MqProvider>
            <MediaQuery type={desktopScreen}> 
                <h2> This is a desktop screen </h2>
            </MediaQuery>
            <MediaQuery type={tabletScreen}>
                <h3> This is a tablet screen </h3> 
            </MediaQuery>
            <MediaQuery type={mobileScreen}> 
                <h4> This is a mobile screen </h4> 
            </MediaQuery>
        </MqProvider>
    )
}

ReactDOM.render(<Menu />, document.getElementById("root"))

```

The Provider can be served an initial screen width either by supplying the user agent as seen below or by supplying a function that returns a specific number

```
//...
import { MqProvider, widthFactory } from 'react-mediaquery'
//...

const MenuA = props => {
    return (
        <MqProvider width={widthFactory(request.userAgent))}>
            //....
        </MqProvider>
    )
}

//This is also valid
const MenuB = props => {
    return (
        <MqProvider width={() => 576}>
            //....
        </MqProvider>
    )
}

//...
```

### Additional knowledge
You can supply other screen types to the MediaQuery component. Just import and use
#### Supported screen types
  - desktopScreen
  - mobileScreen
  - tabletScreen
  - mobileAndTablet
  - desktopAndTablet

### License
MIT
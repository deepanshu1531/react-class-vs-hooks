import React from 'react';
import C from './contextFolder/C';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

class ClassContext extends React.Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={"Deepanshu"}>
                    <ChannelContext.Provider value={"Devzora"}>
                        <C />
                    </ChannelContext.Provider>
                </UserContext.Provider>
            </div>
        )
    }
}

export default ClassContext;
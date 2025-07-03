import React from 'react';
import C from './contextFolder/C';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function HooksContext() {
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

export default HooksContext;
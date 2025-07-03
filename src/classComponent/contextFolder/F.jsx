import React from "react";
import { UserContext, ChannelContext } from "../8-classContext";
import { dataContext } from "../11-classReducerContext";

class F extends React.Component {
    static contextType = dataContext;

    render() {
        return (
            <div>
                <dataContext.Consumer>
                    {data => (
                        <div>
                            <input
                                type="text"
                                placeholder='Enter your channel name'
                                onChange={e => data.dispatch({ type: 'SET_CHANNEL', payload: e.target.value })}
                                value={data.state.channel}
                            />
                            <p>{data.state.channel} by {data.state.name}</p>
                        </div>
                    )}
                </dataContext.Consumer>
                <UserContext.Consumer>
                    {user => (
                        <ChannelContext.Consumer>
                            {channel => (
                                <p>{user} - {channel}</p>
                            )}
                        </ChannelContext.Consumer>
                    )}
                </UserContext.Consumer>
            </div>
        )
    }
}
export default F;
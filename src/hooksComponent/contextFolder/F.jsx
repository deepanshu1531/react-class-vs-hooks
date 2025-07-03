import React from "react";
import { UserContext, ChannelContext } from "../8-hooksContext";
import { dataContext } from "../11-hooksReducerContext";

function F() {
    const User = React.useContext(UserContext);
    const Channel = React.useContext(ChannelContext);
    const data = React.useContext(dataContext);

    return (
        <div>
            <input type="text" placeholder='Enter your channel name' onChange={e => data.dispatch({ type: 'SET_CHANNEL', payload: e.target.value })} value={data.state.channel} />
            <p>{data.state.channel} by {data.state.name}</p>
            <p>{User} - {Channel}</p>
        </div>
    )
}
export default F;
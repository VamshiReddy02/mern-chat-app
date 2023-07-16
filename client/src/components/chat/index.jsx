import React from 'react'
import { 
    useMultiChatLogic,
    MultiChatSocket,
    MultiChatWindow,
 } from 'react-chat-engine-advanced';

const Chat = () => {
    const charProps =useMultiChatLogic(

    )
  return <div style={{ flexBasis: "100%"}}>
    <MultiChatSocket {...charProps} />
    <MultiChatWindow
    {...charProps}
    style={{ height: "100vh"}}
    renderChatHeader={(chat) => <header chat={chat} />}
    />
    </div>;
};

export default Chat;
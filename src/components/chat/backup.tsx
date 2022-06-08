// Portal - Chat
import './chat.scss';

import React, { useEffect, useState } from "react";
import { ChannelFilters, ChannelOptions, ChannelSort, StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
  LoadingIndicator
} from 'stream-chat-react';
import '@stream-io/stream-chat-css/dist/css/index.css';

// Components
import { Header } from "components/header/Header";

import { imagesArr } from "assets";

const apiKey = process.env.REACT_APP_STREAM_KEY as string;
const chatUser = {
  id: "ck",
  name: "chandresh kathiriya",
  image: "https://dummyimage.com/45x45"
}

const filters: ChannelFilters = { type: 'messaging', members: { $in: [chatUser.id] } };
const options: ChannelOptions = { state: true, presence: true, limit: 10 };
const sort: ChannelSort = { last_message_at: -1, updated_at: -1 };

const CustomChannelPreview = (props) => {
  const { channel, setActiveChannel, lastMessage } = props;

  return (
    <div className="m_chat-layout" onClick={() => setActiveChannel(channel)}>
      <div className="mp_container">
        <div className="m_chat-wpr">
          <div className="m_chat-user-list">
            <div className="m_chat-search">
              <input type="text" className="" placeholder="Jump to..." />
            </div>
            <div className="m_chat-users">
              <h4>Direct Message</h4>
              <div className="m_chat-user">
                <div className="m_chat-user-info">
                  <div className="m_chat-user-avatar">
                    <img src={channel.data.image} alt="User name" title="User name" />
                  </div>
                  <div className="m_chat-user-name">
                    <p className="m_one-line">{channel.data.name}</p>
                    <span className="m_one-line">{lastMessage.text}</span>
                  </div>
                </div>
                <div className="m_chat-user-time">
                  <span>12:36</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="m_chat-view">
              </div> */}
        </div>
      </div>
    </div>
  )
};


interface ChatProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button icons
   */
  icon: any;
  /**
   * Optional click handler
   */
  onClick?: (e) => any;
  cn?: string;
}

/**
 * Primary UI component for user interaction
 */


export const Chating = (props: ChatProps) => {
  const { } = props;
  const [client, setClient] = useState(null);

  const [users,] = useState([
    { avatar: "https://dummyimage.com/45x45", name: 'Theresa Webb', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Devon Lane', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Esther Howard', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Theresa Webb', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Devon Lane', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Esther Howard', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Theresa Webb', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Devon Lane', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
    { avatar: "https://dummyimage.com/45x45", name: 'Esther Howard', lastMessage: 'At vero eos et accusamus etAt vero eos et accusamus et', time: new Date() },
  ]);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);
      await chatClient.connectUser(chatUser, chatClient.devToken(chatUser.id));
      const channel = chatClient.channel('messaging', 'react-talk', {
        image: 'https://dummyimage.com/45x45',
        name: 'Talk about react',
        members: [chatUser.id]
      })
      await channel.watch()
      setClient(chatClient)
    }
    init()
    if (client) return () => client.disconnectUser()
  }, [])

  const customOnMessageNew = async (setChannels, event) => {
    const eventChannel = event.channel;

    // If the channel isn't frozen, then don't add it to the list.
    if (!eventChannel?.id || !eventChannel.frozen) return;

    try {
      const newChannel = client.channel(eventChannel.type, eventChannel.id);
      await newChannel.watch();
      setChannels((channels) => [newChannel, ...channels]);
    } catch (error) {
      console.log(error);
    }
  };

  if (!client) return <LoadingIndicator />;

  return (
    <>


      {/* <Chat client={client} theme="messaging light">
          <ChannelList filters={filters} sort={sort} options={options} Preview={CustomChannelPreview} onMessageNew={customOnMessageNew} />
          <Channel >
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat> */}

      <div className="m_portal-layout m_chat-layout">
        <div className="mp_container">
          <div className="m_chat-wpr">
            <div className="m_chat-user-list">
              <div className="m_chat-search">
                <input type="text" className="" placeholder="Jump to..." />
              </div>
              <div className="m_chat-users">
                <h4>Direct Message</h4>
                {
                  users?.map((user) => {
                    return (
                      <div className="m_chat-user">
                        <div className="m_chat-user-info">
                          <div className="m_chat-user-avatar">
                            <img src={user?.avatar} alt="User name" title="User name" />
                          </div>
                          <div className="m_chat-user-name">
                            <p className="m_one-line">{user?.name}</p>
                            <span className="m_one-line">{user?.lastMessage}</span>
                          </div>
                        </div>
                        <div className="m_chat-user-time">
                          <span>12:36</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="m_chat-view">
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



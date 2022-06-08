// Portal - Chat
import 'stream-chat-react/dist/css/index.css';
import './chat.scss';

import React, { useEffect, useState } from "react";
import { ChannelSort, StreamChat } from 'stream-chat';
import { Chat, Channel, MessageInput, MessageList, Thread, Window, ChannelList, useChatContext, LoadingIndicator, CustomStyles } from 'stream-chat-react';
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
const customStyles: CustomStyles = {
	'--main-font': 'Futura PT',
	'--second-font': 'Futura PT',
};

const chatClient = StreamChat.getInstance('9rp9dgw4yfvn');

let chatUser = {
	id: 'chandreshkathiriya',
	name: 'chandresh kathiriya',
	image: 'https://getstream.io/random_png/?id=chandreshkathiriya&name=chandresh kathiriya',
}

const filters = { type: 'messaging', members: { $in: [chatUser.id] } };
const sort: ChannelSort = { last_message_at: -1 };

const CustomChannelHeader = () => {
	const [channelUsers, setChannelUsers] = useState<any>("");
	const { channel } = useChatContext();

	if (!channelUsers) {
		Object.values(channel.state.members).map((user: any) => {
			if (user.role === "member") {
				setChannelUsers(user.user)
			}
		})
	}

	return (
		<div className="str-chat__header-livestream">
			<button aria-label="Menu" className="str-chat__header-hamburger">
				<svg data-testid="menu-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
				<title>Menu</title>
				<path d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z" fill="currentColor">
				</path>
				</svg>
			</button>
			{/* {
				channelUsers.image ?
				<div className="str-chat__avatar str-chat__avatar--rounded" style={{ flexBasis: '40px', fontSize: '20px', height: '40px', lineHeight: '40px', width: '40px' }}>
					<img alt="" className="str-chat__avatar-image str-chat__avatar-image--loaded" style={{ flexBasis: '40px', height: '40px', objectFit: 'cover', width: '40px' }} src={channelUsers.image} />
				</div>
				:
				<div className="str-chat__avatar str-chat__avatar--rounded" style={{ flexBasis: '40px', fontSize: '20px', height: '40px', lineHeight: '40px', width: '40px' }}>
					<div className="str-chat__avatar-fallback" data-testid="avatar-fallback">{channelUsers?.name?.substring(0, 1)}</div>
				</div>
			} */}

			<div className="str-chat__header-livestream-left">
				<p className="str-chat__header-livestream-left--title">{channelUsers.name} </p>
				{/* <p className="str-chat__header-livestream-left--members">2 members, 1 online</p> */}
			</div>
    	</div>
  	);
};

export const Chating = (props: ChatProps) => {
	// const { } = props;
	const [client, setClient] = useState(null);

	useEffect(() => {
		async function init() {
			await chatClient.connectUser(chatUser, chatClient.devToken(chatUser.id));
			setClient(chatClient)
		}
		init()
		if (client) return () => client.disconnectUser()
	}, []);

  	if (!client) return <LoadingIndicator />;

	return (
		<React.Fragment>
			<Chat client={chatClient} theme='messaging light' customStyles={customStyles}>

				<ChannelList filters={filters} sort={sort} showChannelSearch />

				<Channel>
					<Window>
						<CustomChannelHeader />
						<MessageList />
						<MessageInput />
					</Window>
					<Thread />
				</Channel>
			</Chat>
		</React.Fragment>
	)
}



// Portal - Chat
import React, { useState } from "react";

// Components
import { Header } from "components/header/Header";
import { Chating } from "components";

import { imagesArr } from "assets";

export const Chat: React.FC = () => {
    const [user,] = useState({
        avtar: "https://dummyimage.com/50x50",
        name: 'Esther Howard',
        email: 'estherhoward@example.com'
    });

    return (
        <React.Fragment>

            <div className="m_portal">

                {/* Portal Header */}
                <Header type={true} logo={<imagesArr.Logo />} user={user} />
                
                <div className="m_portal-layout m_chat-layout">
                    <div className="mp_container">
                        <div className="m_chat-wpr">
                            <Chating label={""} icon={undefined} />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

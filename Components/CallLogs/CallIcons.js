import React from 'react';

import Missed from "../../assets/CallLogs/missed.svg"
import Outgoing from "../../assets/CallLogs/outgoing.svg"
import VoiceMail from "../../assets/CallLogs/voicemail.svg"
import Incoming from "../../assets/CallLogs/incoming.svg"

const CallIcons = ({ callStatus, callDirection }) => {
    if (callStatus === 'missed') {
        return <Missed />;
    } else if (callStatus === 'voicemail') {
        return <VoiceMail />;
    } else if (callStatus === 'failed') {
        return <Failed />;
    } else {
        if (callDirection === 'incoming') {
            return <Incoming />;
        } else if (callDirection === 'outgoing') {
            return <Outgoing />;
        } else {
            return null; // Default case
        }
    }
};

export default CallIcons;

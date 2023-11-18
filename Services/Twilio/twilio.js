import TwilioVoice from 'react-native-twilio-programmable-voice';

const twilioConfig = {
  twilioAccountSid: 'YOUR_TWILIO_ACCOUNT_SID',
  twilioAuthToken: 'YOUR_TWILIO_AUTH_TOKEN',
  twilioPhoneNumber: 'YOUR_TWILIO_PHONE_NUMBER',
};

let isTwilioInitialized = false;

const initializeTwilio = () => {
  TwilioVoice.initWithToken(twilioConfig.twilioAuthToken, twilioConfig.twilioAccountSid);
  isTwilioInitialized = true;
};

const makeTwilioCall = (to) => {
  if (!isTwilioInitialized) {
    console.error('Twilio is not initialized. Call initializeTwilio first.');
    return;
  }

  const from = twilioConfig.twilioPhoneNumber;
  TwilioVoice.connect({ To: to, From: from });
};

const disconnectTwilioCall = () => {
  if (!isTwilioInitialized || !TwilioVoice) {
    console.error('Twilio is not initialized or TwilioVoice instance is null.');
    return;
  }

  TwilioVoice.disconnect();
};

export { initializeTwilio, makeTwilioCall, disconnectTwilioCall };

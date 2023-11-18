const PhoneNumberFormatter = ({ phoneNumber }) => {
    const formatPhoneNumber = (phoneNumber) => {
      const cleaned = ('' + phoneNumber).replace(/\D/g, ''); // Remove all non-numeric characters from the input
  
      // Check if the cleaned phone number has a valid length
      if (cleaned.length === 12) {
        return `+${cleaned.substring(0, 2)} (${cleaned.substring(2, 5)}) ${cleaned.substring(5, 8)}-${cleaned.substring(8)}`;
      } else {
        // If the length is not as expected, return the original input
        return phoneNumber;
      }
    };
  
    return formatPhoneNumber(phoneNumber); // Return the formatted phone number as a string
  };
  
  export default PhoneNumberFormatter;
  
import React from 'react';

const NameInitials = ({ firstName, lastName }) => {
  let initials = '';

  if (typeof firstName !== 'string' || /\d/.test(firstName) || typeof lastName !== 'string' || /\d/.test(lastName)) {
    return 'Un'; // Return 'Un' for unknown
  }

  if (firstName) {
    initials += firstName.charAt(0).toUpperCase(); // Add the first letter of the first name

    if (lastName) {
      initials += lastName.charAt(0).toUpperCase(); // Add the first letter of the last name
    } else {
      initials += firstName.charAt(1) ? firstName.charAt(1).toUpperCase() : ''; // Add the second letter of the first name if last name is not present or undefined
    }
  }

  return initials;
};

export default NameInitials;

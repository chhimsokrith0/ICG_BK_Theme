'use client';

import React, { useState } from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faWhatsapp,
  faTelegram,
  faLine,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const InviteFriendButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the types for the options
  const options: Array<{
    label: string;
    icon: React.ComponentType<any>;
    isHeroIcon: true;
  } | {
    label: string;
    icon: IconDefinition;
    isHeroIcon: false;
  }> = [
    { label: 'Copy Code', icon: ClipboardIcon, isHeroIcon: true },
    { label: 'Facebook', icon: faFacebookF, isHeroIcon: false },
    { label: 'Email', icon: faEnvelope, isHeroIcon: false },
    { label: 'Whatsapp', icon: faWhatsapp, isHeroIcon: false },
    { label: 'Telegram', icon: faTelegram, isHeroIcon: false },
    { label: 'Line', icon: faLine, isHeroIcon: false },
    { label: 'Skype', icon: faSkype, isHeroIcon: false },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="w-full max-w-96 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
        Invite Friend
      </button>

      {isHovered && (
        <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md border w-48 z-10">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option.isHeroIcon ? (
                  // Render Heroicons
                  React.createElement(option.icon, { className: "w-5 h-5 mr-2" })
                ) : (
                  // Render FontAwesome icons
                  <FontAwesomeIcon icon={option.icon as IconDefinition} className="w-5 h-5 mr-2" />
                )}
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InviteFriendButton;

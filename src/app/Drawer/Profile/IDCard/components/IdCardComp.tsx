// ProfileIcon.tsx
import React from 'react';
import {ThemedText} from '../../../../../components/ThemedText';
import {IdCardZType} from '../../../../../schema/drawer/profile/id-card.schema';

type ProfileIconProps = {
  idCardData: IdCardZType;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({idCardData}) => {
  return <ThemedText>{idCardData.full_name}</ThemedText>;
};

export default ProfileIcon;

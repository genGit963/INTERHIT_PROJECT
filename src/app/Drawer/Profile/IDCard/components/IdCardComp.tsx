// ProfileIcon.tsx
import React from 'react';
import { ThemedText } from '../../../../../components/ThemedText';

interface ProfileIconProps {
    name: string;
    idNumber: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ name, idNumber }) => {
    return (
        <ThemedText>Id card</ThemedText>

    );
};

export default ProfileIcon;

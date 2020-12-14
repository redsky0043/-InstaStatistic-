import React from 'react';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';

export const iconTypes = {
    github: 'github',
    linkedin: 'linkedin',
    instagram: 'instagram',
    facebook: 'facebook',
}

const iconSrc = {
    github: github,
    linkedin: linkedin,
    instagram: instagram,
    facebook: facebook,
}

export default function Icon ({ type  }){

    return (
        <div>
            <img src={iconSrc[type]} alt={type} />
        </div>
    )
};

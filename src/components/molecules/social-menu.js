import React from 'react';

const socialList = [
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/eudiegoborgs'
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/eudiegoborgs'
  }
]

const SocialMenu = () => (
  <React.Fragment>
    { socialList.map(item => (
      <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.icon} className="social-icon">
        <i class={`fa fa-${item.icon}`} />
      </a>
    ))}
  </React.Fragment>
)

export default SocialMenu
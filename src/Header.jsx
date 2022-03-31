import React from 'react';

const Header = (props) => {
  return(
  <marquee className="text-4xl text-green-400 font-bold">{props.children}</marquee>
    );
}

export default Header;
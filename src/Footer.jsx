import React from 'react';
import Embed from './Embed';
const Footer = () => {
  return(
    <div>
    <p className="mb-4 text-white">"We are not permitted to choose the frame of our destiny. But what we put into it is ours."</p>
    <h1 className="text-white mb-5"> - Dag Hammarskjöld</h1>
         <iframe className="w-full h-64 border-4 border-green-500" src="https://www.youtube.com/embed/APwqbUVUdtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h1 className="text-white mt-5 mb-10" >@Copyright Ask CodeYogi</h1>
      
    </div>
  );
}

export default Footer;      
import React from "react";
import Header from '../header';

export default function Navbar({hclass}) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{height: 85}}>
       <div className="fixed-navbar active">
        <Header hclass={hclass}/>
      </div>
    </div>
   
  ); 
}
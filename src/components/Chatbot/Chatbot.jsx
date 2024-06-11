import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = import.meta.env.VITE_COZE_SOURCE;
    script.async = true;

    script.onload = () => {
      // Function to detect if the user is on a mobile device
      function detectMob() {
        return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
      }

      // Determine the layout based on the user's device
      const layout = detectMob() ? 'mobile' : 'pc';

      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: import.meta.env.VITE_COZE_BOT_ID,
        },
        componentProps: {
          title: 'AuIES',
          layout: layout,
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="coze-chatbot-container"></div>;
};

export default Chatbot;
import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current
    if(div){
      div.scrollTop = div.scrollHeight;
    }
      
  }, [messagesRef])
  return (
    <Container>
       <Messages ref={messagesRef}>
         <ChannelMessage
          author="Tiago Marmitt"
          date="19/11/2020"
          content="Algum fã de carterinha ai?"
         />
         <ChannelMessage
          author="Thiago Cazuni"
          date="19/11/2020"
          content={
            <>
              <Mention>@Tiago Marmitt</Mention>, eu!!!
            </>
          }
          isBot
          hasMention
         />
       </Messages>

       <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
       </InputWrapper>

    </Container>
  );
}

export default ChannelData;
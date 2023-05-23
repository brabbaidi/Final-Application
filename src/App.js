import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
        height = "100vh"
        projectID= "f1d5881b-6d02-443f-bb02-bc74cfe2e043"
        userName= "javascriptmastery"
        userSecret= "111111"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} /> }

        />
    )
}
export default App;
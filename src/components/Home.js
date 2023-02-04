import { ChevronDownIcon, PlusIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, PhoneIcon, CogIcon } from "@heroicons/react/solid";
import knight from "../images/knight.png"
import Chat from "../components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../firebase";
import { Navigate } from "react-router-dom";
import { useState } from "react";

import Friends from "./Friends";
import Nitro from "./Nitro";

const  Home = () => {
  const [user] = useAuthState(auth);
  const [onlineFriends, setOnlineFriends] = useState([]);
  // const [chat, setChat] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [requests, setRequests] = useState([
//     { id: 1, name: 'John Doe', message: 'Hey, how are you?' },
//     { id: 2, name: 'Jane Doe', message: 'Can we catch up soon?' },
//     { id: 3, name: 'Jim Doe', message: 'Do you want to play basketball tomorrow?' },
//   ]);
//   const request = useSelector((state) =>
//   state.requests.find((request) => request.id === parseInt(match.params.id))
// );
// const handleClick = (requests) => {
//   setSelectedRequest(requests);
// };
  // const [channels] = useCollection(db.collection("channels"));

  // const handleAddChannel = () => {
  //   const channelName = prompt("Enter a new channel name");

  //   if (channelName) {
  //     db.collection("channels").add({
  //       channelName: channelName,
  //     });
  //   }
  // };

  return (
    <>
      {!user && <Navigate exact to="/" />}
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
          <div className="server-default hover:bg-discord_purple">
            <img src={knight} alt="" className="h-5" />
          </div>
          <hr className=" border-gray-700 border w-8 mx-auto" />
          {/* <ServerIcon image="https://static.vecteezy.com/system/resources/previews/005/733/983/original/cute-astronaut-sitting-on-moon-with-star-cartoon-icon-illustration-science-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" />
          <ServerIcon image="https://img.freepik.com/free-vector/cool-hotdog-wearing-glasses-hat-cartoon-icon-illustration-food-fashion-icon-isolated-flat-cartoon-style_138676-3114.jpg" />
          <ServerIcon image="https://img.freepik.com/premium-vector/cute-penguin-drinking-milk-tea-boba-cartoon-icon-illustration-animal-drink-icon-concept-isolated-flat-cartoon-style_138676-2342.jpg?w=2000" />
          <ServerIcon image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaY-XE0rA0824KrPTflovYW4COoBldppXcg&usqp=CAU" /> */}
          
          <div className="server-default hover:bg-discord_green group">
            <PlusIcon className="text-discord_green h-7 group-hover:text-white" />
          </div>
        </div>

        <div className="bg-[#2f3136] flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
            Official Server... <ChevronDownIcon className="h-5 ml-2" />
          </h2>
          
          <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
            <div className="bg-[#2f3136] flex flex-col min-w-max">
            <h3 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer hover:text-whites" >Friends
          </h3>
          <p className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C]">Nitro <span className="cursor-pointer relative inline-block p-2 bg-purple-200 text-purple-800 font-bold rounded-full">
      New
    </span></p>
            </div>
          
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3  mr-2" />
              
              <h4 className="font-semibold ">Channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                // onClick={handleAddChannel}
              />
            </div>
            {/* <div className="flex flex-col space-y-2 px-2 mb-4">
              {channels?.docs.map((doc) => (
                <Channel
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}
            </div> */}
            {/* <Route path="/message-requests" component={Friends}/>
            <Route component={Nitro}/> */}
          </div>
          <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
            <div className="flex items-center space-x-1">
              <img
                src={user?.photoURL}
                alt=""
                className="h-10 rounded-full"
                onClick={() => auth.signOut()}
              />
              <h4 className="text-white text-xs font-medium">
                {user?.displayName}{" "}
                <span className="text-[#b9bbbe] block">
                  #{user?.uid.substring(0, 4)}
                </span>
              </h4>
            </div>

            <div className="text-gray-400 flex items-center">
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <MicrophoneIcon className="h-5 icon " />
              </div>
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <PhoneIcon className="h-5 icon" />
              </div>
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <CogIcon className="h-5 icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#36393f] flex-grow">
          <Chat />
          <Friends onFriendClick={(friends) => setOnlineFriends(friends)} />
      <div>
        <p>Online Friends:</p>
        {onlineFriends.map((friend, i) => (
          <p key={i}>{friend.name}</p>
        ))}
      </div>
          <Nitro/>
        </div>
      </div>
    </>
  );
}

export default Home;
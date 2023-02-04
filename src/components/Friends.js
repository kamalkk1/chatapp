import React from 'react';
// import { HashtagIcon } from "@heroicons/react/outline";
// import { useDispatch } from "react-redux";
// import { Navigate} from "react-router-dom";
// import { setChannelInfo } from "../features/channelSlice";
// import { Link } from 'react-router-dom';
const Friends = ({ onFriendClick }) => {
  const friends = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'Jim Doe' },
  ];

  return (
    <div onClick={() => onFriendClick(friends)}>
     <span className="text-2xl mr-2">
        <i className="fas fa-users"></i>
      </span>
      <p>Friends:</p>
      {friends.map((friend, i) => (
        <p key={i}>{friend.name} (Online)</p>
      ))}
    </div>
  );

  // const [friend, setFriend] = useState({
  //   name: 'John Doe',
  //   message: 'Hi there!',
  // });

  // return (
  //   <div onClick={() => {
  //     onFriendClick(friend);
  //     setFriend({
  //       name: 'John Doe',
  //       message: 'Hi there!',
  //     });
  //   }}>
  //     <p>From: {friend.name}</p>
  //     <p>Message: {friend.message}</p>
  //   </div>
  // );



  
    // const dispatch = useDispatch();
    // // const navigate = Navigate();
  
    // const handleClick = () => {
    //   dispatch(
    //     setChannelInfo({
    //       channelId: id,
    //       channelName: channelName,
    //     })
    //   );
  
     
    // };
  
  
  //   return (
  //     <div
  //       className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
  //     >
    
  //     </div>
  //   );
  }


export default Friends;

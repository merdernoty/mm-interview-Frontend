// 'use client';

// import React, { useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import ActivityBento from '@/components/profile/bento/activityBento';
// import useUser from '@/lib/stores/userStore';
// import ProfileLeftBento from './bento/profileLeftBento';
// import CompletedBento from './bento/completedBento';
// import FavouriteBento from './bento/favouriteBento';
// import PlaylistBento from './bento/playlistBento';
// import EnergyBento from './bento/energyBento';
// import { UseUser, Params } from './type'; // Импортируем типы

// const Profile: React.FC = () => {
//   const { data, fetchUserDataByToken, fetchUserDataByUsername } = useUser() as UseUser;
//   const params = useParams<Params>(); // Используем тип Params

//   const username = params.username;

//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     if (currentPath.startsWith('/user') && username) {
//       fetchUserDataByUsername(username);
//     } else if (currentPath.startsWith('/me')) {
//       fetchUserDataByToken();
//     }
//   }, [username, fetchUserDataByUsername, fetchUserDataByToken]);

//   return (
//     <div className="w-full flex gap-5 mt-5 mb-10">
//       <ProfileLeftBento />

//       <div className="flex-1 flex flex-col gap-5 h-[120px]">
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="flex gap-5 flex-wrap lg:flex-nowrap">
//             <FavouriteBento data={data || { info: { favoriteQuestions: [] }}} />
//             <PlaylistBento data={data || { info: { favoriteQuestions: [] }}} />
//             <EnergyBento />
//           </div>
//         </div>
//         <ActivityBento />
//         <CompletedBento data={data || { info: { favoriteQuestions: [] }}} />
//       </div>
//     </div>
//   );
// };

// export default Profile;

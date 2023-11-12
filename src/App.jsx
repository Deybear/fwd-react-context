// import { useState } from 'react'
import { AccountsContext } from './context/AccountsContext';
import { NavHeader } from './components/navbar'
import { Post } from './components/post'
import './App.css';
import { UserContex } from './context/UserContext';
import { FeedContext } from './context/FeedContext';

function App()
{
  const timelineFeed = [
    {
      uid: 1,
      feed: {
        uid: 1,
        feedname: 'Elza Nahoria Gourmet',
        thumbnail: 'https://shorturl.at/ejHJM'
      },
      likes: 999,
      description: 'My favorite pizza!',
      location: 'Puntarenas, Costa Rica',
      pictures: [
        'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg', 
        'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg'
      ]
    },
    {
      uid: 2,
      feed: {
        uid: 2,
        feedname: 'Juan Frustrante',
        thumbnail: 'https://shorturl.at/OQT78'
      },
      likes: 44,
      description: 'About Last Night!',
      location: 'Las Vegas, Nevada',
      pictures: [
        'https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_1280.jpg'
      ]
    },
    {
      uid: 3,
      feed: {
        uid: 3,
        feedname: 'Rita',
        thumbnail: 'https://shorturl.at/aervZ'
      },
      likes: 6000,
      description: 'About Last Night!',
      location: 'Las Vegas, Nevada',
      pictures: [
        'https://cdn.pixabay.com/photo/2017/12/20/10/48/portugal-3029665_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg'
      ]
    }
  ]
  
  const suggestedAccounts = [
    {
      uid: 66,
      username: 'Udemy',
      thumbnail: 'https://shorturl.at/crxGO',
    },
    {
      uid: 787,
      username: 'Nasa',
      thumbnail: 'https://shorturl.at/cuJNV',
    },
  ];
  
  const currentUser = {
    username: 'JP',
    followers: 2
  };

  return (

    <>

    {/* - - - - - </> USER CONTEXT </> - - - - - */}
    <UserContex.Provider value={currentUser}>

      {/* - - - - - </> ACCOUNTS CONTEXT </> - - - - - */}
      <AccountsContext.Provider value={suggestedAccounts}><NavHeader></NavHeader></AccountsContext.Provider>

      {/* - - - - - </> FEED CONTEXT </> - - - - - */}
      <FeedContext.Provider value={timelineFeed}><Post></Post></FeedContext.Provider>

    </UserContex.Provider> 

    </>

  )
}

export default App

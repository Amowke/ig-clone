import  {USERS} from './users'

export const POSTS = [
  {
    imageurl: 'https://smv.org/media/images/qyw_rats.width-1600.png',
    user: USERS[0].user,
    likes: 5618,
    caption: 'Just chilling.😂🏀',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'cat',
        comment: 'I will join you soon😑'
      },
      {
        user: 'dog',
        comment: '🥺🥺',
      },
    ],
  },
  {
    imageurl: 'https://img1.ak.crunchyroll.com/i/spire2/1bfb9b57d331ab55eca3f18e734362ce1637703986_main.jpg',
    user: USERS[3].user,
    likes: 8800,
    caption: 'Need some meat 😋🤤',
    profile_picture: USERS[3].image,
    comments: [
      {
        user: 'dog',
        comment: 'Wish that me real bad😑'
      },
      {
        user: 'gus',
        comment: 'I just want Syrup',
      },
    ],
  },
]
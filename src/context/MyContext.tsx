import React, { FC, createContext, useState, useEffect } from 'react'

// Apollo
import { gql, useQuery } from '@apollo/client'

interface ILikes{
  userId: number;
  postId: number;
}

interface IPost{
  title: string;
  content: string;
  likes: ILikes;
}

interface User{
  id: number;
  name: string;
  email: string;
}

interface IFollower{
  followerId : number
  followingId : number
}

interface IUser extends User{
  post?: IPost;
  follower?: IFollower[];
}

const getUser = gql`
  query getUserById{
    getUserById{
      id
      name
      email
      follower{
        followerId
        followingId
      }
    }
  }
`


interface Context{
  user?: IUser;
  setUser?: React.Dispatch<React.SetStateAction<IUser>>;
  loading?: boolean;
}

const Context = createContext<Context>({})

export const ContextComponent : FC = ({children}) => {
  const [ user , setUser ] = useState<IUser>({} as IUser)
  const {loading, data} = useQuery(getUser)

  useEffect(() => {
    if(data){
      setUser(data.getUserById)
    }
  }, [data])

  return(
    <Context.Provider value={{
      user,
      setUser,
      loading
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context // Context
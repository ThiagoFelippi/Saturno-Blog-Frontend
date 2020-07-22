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
  description: string;
  linkedin: string;
  github: string;
  instagram: string;
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
  query getUserByToken{
    getUserByToken{
      id
      name
      email
      description
      linkedin
      github
      instagram
      follower{
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
      const { id, name, email ,description, follower, linkedin, github, instagram } = data.getUserByToken
      setUser({
        id,
        name,
        email,
        description,
        follower,
        linkedin,
        github,
        instagram
      })
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
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import DeletePost from '../../DeletePost'
import Modal from '../../Modal'

// Apollo 
import { useQuery, gql } from '@apollo/client'
import { string } from 'yup'

interface IPost{
  title: string;
  content: string;
}

interface Props{
  type: string;
  close: () => void;
  opened?: boolean;
  id? : number;
}
// Query para pegar post por id, e lembrar de passar o id na props e o value no modal de edit
const getPostById = gql`
query getPostById($id: Int!) {
  getPostById(id: $id) {
      title
      content
    }
  }
`

const ModalsComponent : React.FC<Props> = ({type, close, opened, id}) => {
  const [ postInfos, setPostInfos ] = useState<IPost>({} as IPost)
  const { loading, data } = useQuery(
    getPostById, {
      variables: {
         id
      } 
    }
  );
  
  useEffect(() => {
    if(data){
      setPostInfos(data.getPostById)
    }
  }, [data])

 return type === "edit" ?
    ReactDOM.createPortal(
      <Modal value={postInfos} opened={opened} close={close} />,
      document.getElementById("modal-root")
    )
    :
    ReactDOM.createPortal(
      <DeletePost id={id} close={close} />,
      document.getElementById("modal-root")
    )
 
} 

export default ModalsComponent


import { toast } from 'react-toastify'
toast.configure()

export default (type : String, message : String) => {
  const config = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  } as any
  if(type === "success"){
    toast.success(message, config) 
  }else if(type === "warning"){
    toast.warning(message, config)
  }else{
    toast.error(message, config)
  }


}
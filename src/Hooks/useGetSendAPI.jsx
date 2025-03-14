import baseURL from "../API/API"
const useGetSendAPI=async(url,param)=>{
   const res=await baseURL.get(url,param);


   return res;
}
export default useGetSendAPI
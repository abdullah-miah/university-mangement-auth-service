import { User } from "./user.model";




export const findLastUserid = async ()=>{
    const lastUser = await User.findOne({}, {id:1, _id: 0}).sort({
        createAt:-1,
    }).lean();

    return lastUser?.id
}


 export const generateUserId = async()=>{

    const currentId = (await findLastUserid() ) || (0).toString().padStart(5,'0');

    //increment by 1

    const incrementedId = (parseInt(currentId) +1).toString().padStart(5, '0');

    return incrementedId;
    // lastuserId++
    //  return String(lastuserId).padStart(5,'0');
}
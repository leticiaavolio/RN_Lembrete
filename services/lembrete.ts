import { data } from "../data/index";

export function getAllLembretes(){
    return data.lembretes;
};

export function getLembretebyId(pId:number){
    return  data.lembretes.find(item=>item.LembreteId===pId)
}
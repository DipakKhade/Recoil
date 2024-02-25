import { atom, selector } from "recoil";

export const counterAtom = atom({
    key:'countrtAtom',
    default:0
})

export const iseven=selector({
    key:'iseven',
    get:(props)=>{
  const count = props.get(counterAtom)
  return count%2
    }
})



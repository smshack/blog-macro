import { createContext } from "react";
//  어떤 상태를 유지할 것인지 전역 변수로 상태 관리를 하기 위해 생성

export const AuthContext = createContext({
  id: "",
  nvuserlist:[]
});

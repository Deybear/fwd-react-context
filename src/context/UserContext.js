import { createContext, useContext } from "react";

export const UserContex = createContext({});

export function useUser()
{
  const user = useContext(UserContex);

  if (user === undefined)
  {
    throw new Error('User is not deffined in the UserContext');
  }

  return user;
}

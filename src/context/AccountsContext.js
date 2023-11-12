import { createContext, useContext } from "react";

export const AccountsContext = createContext({});

export function useAccount()
{
  const account = useContext(AccountsContext);

  if (account === undefined)
  {
    throw new Error('Account is not deffined in the AccountsContext');
  }
  
  return account;
}
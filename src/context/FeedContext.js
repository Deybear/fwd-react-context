import { createContext, useContext } from "react";

export const FeedContext = createContext({});

export function useFeed()
{
  const feed = useContext(FeedContext);

  if (feed === undefined)
  {
    throw new Error('Feed is not deffined in the FeedContext');
  }

  return feed;
}
   
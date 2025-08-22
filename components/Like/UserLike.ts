import { useState } from 'react';


interface UseLikeProps {
  isLiked?: boolean
}

export const useLikes = ({isLiked = false}: UseLikeProps) => {
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = async () => {
    const newLikeState = !liked;
    setLiked(newLikeState);
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/:id', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          liked: newLikeState
        })
      });
      if(!response.ok) {
        throw new Error('Failed');
      }
    
    } catch(error) {
      console.error(error);
      setLiked(liked);
    }
  };
return {
  liked,
  toggleLike,
};
};
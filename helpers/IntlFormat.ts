
export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  
  
  const diffInMonths = (now.getFullYear() - date.getFullYear()) * 12 + 
                      (now.getMonth() - date.getMonth());
  
  if (diffInMonths === 0) {
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    return new Intl.RelativeTimeFormat('ru', { 
        numeric: 'auto' 
      }).format(-diffInHours, 'hour');
    }
    
    return new Intl.RelativeTimeFormat('ru', { 
      numeric: 'auto' 
    }).format(-diffInDays, 'day');
  }
  
  // Для месяцев
  return new Intl.RelativeTimeFormat('ru', { 
    numeric: 'always' 
  }).format(-diffInMonths, 'month');
};
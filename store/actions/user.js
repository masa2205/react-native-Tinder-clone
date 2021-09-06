export const addLike = ({likeUser}) => {
  return {
    type: 'ADD_LIKE',
    likeUser: likeUser,
  };
};

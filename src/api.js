/**
 * Constant with the API URL prefix
 */
const URL_PATH = `https://5e7d0266a917d70016684219.mockapi.io/api/v1`;

/**
 * HTML verbs available in the API
 */
const HTTP_VERB = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

/**
 * Standard content for the request header
 */
const HEADERS = {
  "Content-Type": "application/json",
};

/**
Users	GET	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users	    200	Array of Object
User	GET	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id	200	Object
User	POST	  https://5e7d0266a917d70016684219.mockapi.io/api/v1/users	    201	Created object
User	PUT	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id	200	Updated object
User	DELETE	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id	200	Deleted object
*/
/**
 * Get all users
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users
 * @status 200
 * @param {string} search string [optional]
 * @return {Promise} Promise
 */
const getUsers = async (params = null) => {
  const search = params ? `?search=${params}` : ''
  return await fetch(`${URL_PATH}/users${search}`, {
    method: HTTP_VERB.GET,
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => data);
};

/**
 * Get a specific user
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id
 * @status 200
 * @param {number} id
 * @return Promise
 */
const getUser = async (id) => {
  return await fetch(`${URL_PATH}/users/${id}`, {
    method: HTTP_VERB.GET,
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => data);
};

/**
 * Create a user
 * @method POST
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users
 * @status 200
 * @param {object} user
 * @return Promise
 */
const postUser = async (user) => {
  return await fetch(`${URL_PATH}/users`, {
    method: HTTP_VERB.POST,
    headers: HEADERS,
    body: JSON.stringify(user),
  }).then((res) => res);
};

/**
 * Edit a user
 * @method PUT
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id
 * @status 200
 * @param {number} id
 * @return Promise
 */
const putUser = async (id, user) => {
  return await fetch(`${URL_PATH}/users/${id}`, {
    method: HTTP_VERB.PUT,
    headers: HEADERS,
    body: JSON.stringify(user),
  }).then((res) => res);
};

/**
 * Delete a user
 * @method DELETE
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id
 * @status 200
 * @param {number} id
 * @return Promise
 */
const deleteUser = async (id) => {
  return await fetch(`${URL_PATH}/users/${id}`, {
    method: HTTP_VERB.DELETE,
    headers: HEADERS,
  }).then((res) => res);
};

/**
Posts	GET	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts	    200	Array of Object
Post	GET	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id	200	Object
Post	POST	  https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts	    201	Created object
Post	PUT	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id	200	Updated object
Post	DELETE	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id	200	Deleted object
*/
/**
 * Get all posts from a user
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts
 * @status 200
 * @param {number} userId
 * @return Promisse
 */
const getPosts = async (userId) => {
  return await fetch(`${URL_PATH}/users/${userId}/posts`, {
    method: HTTP_VERB.GET,
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => data);
};

/**
 * Get a post from a specific user
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id
 * @status 200
 * @param {number} userId
 * @param {number} postId
 * @return Promisse
 */
const getPost = async (userId, postId) => {
  return await fetch(`${URL_PATH}/users/${userId}/posts/${postId}`, {
    method: HTTP_VERB.GET,
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => data);
};

/**
 * Create a post for a specific user
 * @method POST
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts
 * @status 201
 * @param {number} userId
 * @param {object} post
 * @return Promisse
 */
const postPost = async (userId, post) => {
  return await fetch(`${URL_PATH}/users/${userId}/posts`, {
    method: HTTP_VERB.POST,
    headers: HEADERS,
    body: JSON.stringify(post),
  }).then((res) => res);
};

/**
 * Edit a post by a specific user
 * @method PUT
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id
 * @status 201
 * @param {number} userId
 * @param {number} postId
 * @param {object} post
 * @return Promisse
 */
const putPost = async (userId, postId, post) => {
  return await fetch(`${URL_PATH}/users/${userId}/posts/${postId}`, {
    method: HTTP_VERB.PUT,
    headers: HEADERS,
    body: JSON.stringify(post),
  }).then((res) => res);
};

/**
 * Delete a post by a specific user
 * @method DELETE
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id
 * @status 201
 * @param {number} userId
 * @param {number} postId
 * @return Promisse
 */
const deletePost = async (userId, postId) => {
  return await fetch(`${URL_PATH}/users/${userId}/posts/${postId}`, {
    method: HTTP_VERB.DELETE,
    headers: HEADERS,
  }).then((res) => res);
};

/**
Comments	  GET	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments	    200	Array of Object
Comment	    GET	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id	200	Object
Comment	    POST	  https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments	    201	Created object
Comment	    PUT	    https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id	200	Updated object
Comment	    DELETE	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id	200	Deleted object
*/

/**
 * Takes all of a user's comments on a post
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments
 * @status 200
 * @param {number} userId
 * @param {number} postId
 * @return Promisse
 */
const getComments = async (userId, postId) => {
  return await fetch(`${URL_PATH}/users/${userId}/posts/${postId}/comments`, {
    method: HTTP_VERB.GET,
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => data);
};

/**
 * Get a user-specific comment on a post
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id
 * @status 200
 * @param {number} userId
 * @param {number} postId
 * @param {number} commentId
 * @return Promisse
 */
const getComment = async (userId, postId, commentId) => {
  return await fetch(
    `${URL_PATH}/users/${userId}/posts/${postId}/comments/${commentId}`,
    {
      method: HTTP_VERB.GET,
      headers: HEADERS,
    }
  )
    .then((res) => res.json())
    .then((data) => data);
};

/**
 * Get a user-specific comment on a post
 * @method POST
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments
 * @status 201
 * @param {number} userId
 * @param {number} postId
 * @param {object} comment
 * @return Promisse
 */
const postComment = async (userId, postId, comment) => {
  return await fetch(`${URL_PATH}/users/${userId}/posts/${postId}/comments`, {
    method: HTTP_VERB.POST,
    headers: HEADERS,
    body: JSON.stringify(comment),
  }).then((res) => res);
};

/**
 * Edit a specific comment within a user's post
 * @method PUT
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id
 * @status 200
 * @param {number} userId
 * @param {number} postId
 * @param {number} commentId
 * @param {object} comment
 * @return Promisse
 */
const putComment = async (userId, postId, commentId, comment) => {
  return await fetch(
    `${URL_PATH}/users/${userId}/posts/${postId}/comments/${commentId}`,
    {
      method: HTTP_VERB.PUT,
      headers: HEADERS,
      body: JSON.stringify(comment),
    }
  ).then((res) => res);
};

/**
 * Deletes a comment within a user's post
 * @method DELETE
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id
 * @status 200
 * @param {number} userId
 * @param {number} postId
 * @param {number} commentId
 * @return Promisse
 */
const deleteComment = async (userId, postId, commentId) => {
  return await fetch(
    `${URL_PATH}/users/${userId}/posts/${postId}/comments/${commentId}`,
    {
      method: HTTP_VERB.DELETE,
      headers: HEADERS,
    }
  ).then((res) => res);
};

/**
stories	GET	https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories	    200	Array of Object
story	  GET	https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories/:id	200	Object
*/
/**
 * Get all stories
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories
 * @status 200
 * @return Promisse
 */
const getStories = async () => {
  return await fetch(`${URL_PATH}/stories`, {
    method: HTTP_VERB.GET,
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => data);
};
/**
 * Get a specific story
 * @method GET
 * @route https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories/:id
 * @status 200
 * @param {number} storyId
 * @return Promisse
 */
const getStory = async (storyId) => {
  return await fetch(`${URL_PATH}/stories/${storyId}`, {
    method: HTTP_VERB.GET,
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => data);
};

export default {
  get: {
    Users: getUsers,
    User: getUser,
    Posts: getPosts,
    Post: getPost,
    Comments: getComments,
    Comment: getComment,
    Stories: getStories,
    Story: getStory,
  },
  post: {
    User: postUser,
    Post: postPost,
    Comment: postComment,
  },
  put: {
    User: putUser,
    Post: putPost,
    Comment: putComment,
  },
  delete: {
    User: deleteUser,
    Post: deletePost,
    Comment: deleteComment,
  },
};

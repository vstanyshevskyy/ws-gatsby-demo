const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  const fetchRandomUser = () => axios.get(`https://randomuser.me/api/?results=9&nat=us,dk,fr,gb&seed=whitespectre`);
  const res = await fetchRandomUser();
  res.data.results.map((user, i) => {
    const userNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `RandomUser`,
      },
      children: [],
      gender: user.gender,
      name: {
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
      },
      picture: {
        large: user.picture.large,
        medium: user.picture.medium,
        thumbnail: user.picture.thumbnail,
      }
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    userNode.internal.contentDigest = contentDigest;
    createNode(userNode);
  });
};
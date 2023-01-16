import fetchSanity from "./fetchSanity";

const allPostsQuery = `
    query {
        allPost {
            title
            _id
            shortDesc
            tags
            _createdAt
            path {
              current
            }
            postImage{
                asset {
                    url
                }
            }
        }
    }
`;

export type PostSnipppet = {
  title: string;
  _id: string;
  shortDesc: string;
  _createdAt: string;
  tags: String[];
  path: {
    current: string;
  };
  postImage: {
    asset: {
      url: string;
    };
  };
};
const getAllPosts = async () => {
  const data = await fetchSanity<{ allPost: PostSnipppet[] }>(allPostsQuery);
  return data;
};

export { getAllPosts };

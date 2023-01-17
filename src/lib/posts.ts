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

const postQuery = `
    query getPost(
      $path: String!
    ) {
      allPost(where: { path: { current: { eq: $path }}}) {
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

export type Post = PostSnipppet & {};

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

const getPost = async (path: string) => {
  const { allPost } = await fetchSanity<{ allPost: Post[] }>(postQuery, {
    variables: { path },
  });
  return allPost[0];
};

export { getAllPosts, getPost };

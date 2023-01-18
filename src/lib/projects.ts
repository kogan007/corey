import fetchSanity from "./fetchSanity";

const allProjectsQuery = `
    query {
        allProject {
            name
            _id
            shortDesc
            sitePath
            path {
              current
            }
            projectLogo {
              asset {
                url
              }
            }
            projectImage{
                asset {
                    url
                }
            }
        }
    }
`;

export type ProjectSnippet = {
  name: string;
  _id: string;
  sitePath: string;
  shortDesc: string;
  path: {
    current: string;
  };
  projectLogo: {
    asset: {
      url: string;
    };
  };
  projectImage: {
    asset: {
      url: string;
    };
  };
};
const getAllProjects = async () => {
  const data = await fetchSanity<{ allProject: ProjectSnippet[] }>(
    allProjectsQuery
  );
  return data;
};

export { getAllProjects };

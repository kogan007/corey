import fetchSanity from "./fetchSanity";

const allProjectsQuery = `
    query {
        allProject {
            name
            _id
            shortDesc
            path {
              current
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
  shortDesc: string;
  path: {
    current: string;
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

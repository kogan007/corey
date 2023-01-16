type Variables = {
  variables?: Record<string, any>;
};
export default async function fetchSanity<T = {}>(
  query: string,
  { variables }: Variables = {}
): Promise<T> {
  const data = await fetch(
    "https://wzvwcirb.api.sanity.io/v1/graphql/production/default",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  ).then((res) => {
    if (!res.ok) {
      return new Error("Graphql Error");
    }
    return res.json();
  });
  return data.data;
}

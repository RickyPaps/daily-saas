export const useFetchGenerate = async () => {
  const response = await fetch("/api/generate");
  const data = await response.json();
  return data.idea;
};

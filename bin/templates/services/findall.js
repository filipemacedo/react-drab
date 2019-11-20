export const findAll = async () => {
  try {
    const response = await api.get(ENDPOINT);

    return response;
  } catch (error) {
    throw error;
  }
};
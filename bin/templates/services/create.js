export const create = async body => {
  try {
    const response = await api.post(ENDPOINT, body);

    return response;
  } catch (error) {
    throw error;
  }
};
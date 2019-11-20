export const findOne = async ({ {serviceNameLowerCase}Id }) => {
 try {
  const response = await api.get(`${ENDPOINT}/${{serviceNameLowerCase}Id}`);

  return response;
 } catch (error) {
  throw error;
 }
} 
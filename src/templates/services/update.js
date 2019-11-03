export const update = async ({ body, {serviceNameLowerCase}Id }) => {
 try {
  const response = await api.put(`${ENDPOINT}/${{serviceNameLowerCase}Id}`, body);

  return response;
 } catch (error) {
  throw error;
 }
} 
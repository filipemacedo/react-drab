export const remove = async ({ {serviceNameLowerCase}Id }) => {
 try {
  const response = await api.delete(`${ENDPOINT}/${{serviceNameLowerCase}Id}`);

  return response;
 } catch (error) {
  throw error;
 }
} 
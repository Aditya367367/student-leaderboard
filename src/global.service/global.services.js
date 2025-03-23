const BASE_URL = process.env.REACT_APP_API_URL;

const fetchAPI = async (endpoint, method = "GET", body = null) => {
  const headers = { "Content-Type": "application/json" };
  const options = { method, headers };

  if (body) options.body = JSON.stringify(body);

  try {
    console.log(`Fetching: ${BASE_URL}/${endpoint}`); 
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    return null; 
  }
};

export default fetchAPI;

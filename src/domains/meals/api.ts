import axios from "axios";

const baseURL = "https://www.themealdb.com/api/json/v1/1";

const defaultErrorResponse = {
  error: true
};

const apiGet = async (path: string) => {
  try {
    const { data } = await axios.get(`${baseURL}${path}`);
    return data;
  } catch (e) {
    console.error(e.message);
    return defaultErrorResponse;
  }
};

export default {
  search: async (query: string) => apiGet(`/search.php?s=${query}`),
  lookup: async (id: number) => {
    const { meals, error } = await apiGet(`/lookup.php?i=${id}`);
    if (!meals) return defaultErrorResponse;
    return error || { meal: meals[0] };
  }
};

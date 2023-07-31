import { useHttp } from './http.hook';

const useCharService = () => {
  const {request} = useHttp();
  const _apiBase = 'https://rickandmortyapi.com/api/character/?page=';

  const getCharacters = async (numPage) => {
    return await request(_apiBase + numPage, 'GET');
  }
  return {getCharacters};
}

export default useCharService;
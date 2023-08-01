import { useHttp } from './http.hook';

const useCharService = () => {
  const {request, loading, error, clearError} = useHttp();
  const _apiBase = 'https://rickandmortyapi.com/api/character/?page=';

  const getCharacters = (numPage) => {
    return request(_apiBase + numPage, 'GET');
  }
  return {getCharacters, loading, error, clearError};
}

export default useCharService;
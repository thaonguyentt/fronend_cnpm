import React, { useCallback } from 'react'

const ListProduct = () => {
  const [listProduct, setlistProduct] = React.useState()


  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch('http://localhost/php_rest_myblog/api/post/read.php');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setlistProduct(transformedMovies);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  React.useEffect(() => {
    fetchMoviesHandler()
    
  }, [fetchMoviesHandler])
  return (
    <div style={{height:"100vh"}}>
      {listProduct&& listProduct.map(item=> item?.title)}
    </div>
  )
}

export default ListProduct

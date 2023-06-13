import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  // const { push } = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
    // push({
    //   pathname,
    //   search: `?search=${str}`,
    // });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory.toLowerCase().includes(search.toLowerCase())
            )
          : data.categories
      );
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
}

export default Home;

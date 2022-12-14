import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import History from './History';
import SearchBar from './SearchBar';

function SearchPage() {

  const state = useLocation();
  console.log(state);

  // string은 map을 사용 할 수 없기때문에 object 형태로 변환 시키기 위해 parsing
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  );

  // keyword에 변화가 일어날때만 랜더링
  useEffect(() => {
    // array 타입을 string형태로 바꾸기 위해 json.stringfy를 사용
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  // 검색어 추가
  const handleAddKeyword = (text) => {
    console.log('text', text);
    const newKeyword = {
      id: Date.now(),
      text,
      state: state.state,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  // 검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => thisKeyword.id !== id);
    setKeywords(nextKeyword);
  };

  // 식단 페이지에 해당 값 넘겨주기

  // 검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  return (
    <div>
      <SearchBar onAddKeyword={handleAddKeyword} />
      <History
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </div>
  );
}

export default SearchPage;
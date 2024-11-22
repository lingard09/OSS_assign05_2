import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Book Detail</h1>
      <p>Book ID: {id}</p>
      {/* 여기에서 추가적으로 상세 정보를 로드하거나 표시할 수 있습니다 */}
    </div>
  );
};

export default Detail;

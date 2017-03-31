import React from 'react';

const App = ({...props}) => {
  const items = [
    {id: '1e91b13a-cdb2-4268-bc43-da5b08785ed3', content: 'First item'},
    {id: '66c4ef81-40a2-410b-9a5d-750542caf912', content: 'Second item'},
    {id: 'f6b36935-1426-471b-a998-e49e81a6e7a6', content: 'Third item'},
    {id: 'd8c32bba-d9cf-4c9d-8bd3-d595e6b34ee7', content: 'Fourth item'},
  ];
  return (
  	<ul>
    	{items.map( (item) => {
        return <Item key={item.id} data={item} />;
      })}
    </ul>
  );
};

const Item = ({data}) => {
	const _showId = () => {
  	alert(`My id is ${data.id}`);
  };
	return <li key={data.id} onClick={_showId}>{data.content}</li>;
};

export default App;

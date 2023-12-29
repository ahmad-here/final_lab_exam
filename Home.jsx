import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmojiData } from '../Store'; 
const Home = () => {
  const dispatch = useDispatch();
  const emojiData = useSelector((state) => state.emoji.data);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://emojihub.yurace.pro/api/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        dispatch(setEmojiData(jsonData));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div>Home</div>
      <h1>Emoji Data:</h1>
      <ul>
        {emojiData.map((emojiItem) => (
          <li key={emojiItem.id}>{emojiItem.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;

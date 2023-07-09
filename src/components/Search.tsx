import styles from '../css/App.module.css';
import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [input, setInput] = useState<string>('');
  const [foods, setFoods] = useState<string[] | null>(null);
  const [error, setError] = useState<any>(null);
  // const URL :string = "https://api.edamam.com/api/food-database/v2/parser?"
  const URL: string = '/api/food-database/v2/parser?';
  const parameter: string = `app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=${input}&nutrition-type=cooking`;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const fetchData = async () => {
    try {
      setError(null);
      setFoods(null);
      const response = await axios.get(URL + parameter);
      const data = response.data.hints;
      setFoods(data);
      console.log(data);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  if (error) return <div>Error...</div>;

  return (
    <div>
      {foods ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="search" className={styles.input} placeholder="🔍" onChange={onChange} value={input}></input>
          </form>
          <h3>
            '{input}' 검색결과: {foods.length}개
          </h3>
          {foods.map((item: any, index) => {
            return (
              <div key={index} className={styles.dataWrap}>
                <ul className={styles.dataDescUl}>
                  <li>
                    <img src={item.food.image} />
                  </li>
                  <li>
                    <b>{item.food.label}</b>
                  </li>
                  <li>열량: {Math.round(item.food.nutrients.ENERC_KCAL)}kcal</li>
                  <li>탄수화물: {Math.round(item.food.nutrients.CHOCDF)}g</li>
                  <li>단백질: {Math.round(item.food.nutrients.PROCNT)}g</li>
                  <li>지방: {Math.round(item.food.nutrients.FAT)}g</li>
                  <li>식이섬유: {Math.round(item.food.nutrients.FIBTG)}g</li>
                  <li>당류: {Math.round(item.food.nutrients.SUGAR)}g</li>
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="search" className={styles.input} placeholder="🔍" onChange={onChange} value={input}></input>
        </form>
      )}
    </div>
  );
}

export default Search;

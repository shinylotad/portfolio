import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

function formatName(user){
  return user.firstName + '' + user.lastName;
}

function Book() {
  const isValid = false;
  const user = {
    firstName: ' SOUL ',
    lastName: ' TAN',
    imageUrl: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/268003160_631120804679801_2905413761152938013_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=cfM-g-6fK18AX8bQV6v&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ9wseCK0ntoprxH8RSBAso6iZrFRvfu3kuqA2w4te1KQ&oe=61E76756'
  };

  return (
    <div>
      <h1>
      LEARN STUFFS
      { formatName(user) }
      { formatName(user) }
      { formatName(user) }
      <img src={user.imageUrl}></img>
      <Rating rating=' 1'/>
      <Button variant="danger"disabled={!isValid}>YA</Button>
      </h1>
    </div>
  );
}

export default Book;

import React from "react";
import avatar from "../images/avatar.jpg";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Quiz from "./quiz";
import { questions } from "../utils/constants";

function Test(props) {
  const currentUser = React.useContext(CurrentUserContext)
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__wrapper-avatar" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={currentUser.avatar ? currentUser.avatar : avatar} alt="фото пользователя"/>
            <span className="profile__editAvatar"></span>
          </div>

          <div className="profile__wrapper">
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name ? currentUser.name : 'Жак-Ив Кусто'}</h1>
              <p className="profile__description">{currentUser.about ? currentUser.about : 'Исследователь океана'}</p>
            </div>
            <button className="profile__button-edit" type="button"
                    onClick={props.onEditProfile}></button>
          </div>
        </div>

        <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
      </section>
      {questions.map((question, index) => {{
        return <Quiz question={question} key={index}/>
      }})}
    </main>
  )
}

export default Test;

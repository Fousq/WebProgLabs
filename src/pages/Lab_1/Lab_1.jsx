import React from 'react';
import './Lab_1.css';

function Lab1Page() {
    return (
    <div className="container">
      <h1>Лабораторная работа №1</h1>
      <div className="tasksTable">
        <h3>Задания:</h3>
        <ul>
          <li>В качестве названия вкладки содержит ваше имя и фамилию</li>
          <li>Фон страницы залит зеленым цветом</li>
          <li>Цвет текста на странице красный</li>
          <li>Текст на странице: Студент(ка) ФИО, Группа: ХХ ИТ ХХ, Специальность: НАЗВАНИЕ ВАШЕЙ
СПЕЦИАЛЬНОСТИ</li>
        </ul>
      </div>
      <div className="task">
        <p className="full_name">Студент: Оракбаев Жанболат Сабитұлы</p>
        <p className="group">Группа: ИНФ-42</p>
        <p className="specialty">Специальность: Информатика(естестваенная наука)</p>
      </div>
    </div>
    );
}

export default Lab1Page;
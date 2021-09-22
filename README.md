# front-template

front-end 학습용 간단 서비스 템플릿 저장소

## COUNTER APP

![counter-app-template](https://user-images.githubusercontent.com/45627868/133920862-1d6d32f1-fc28-4fe5-89d5-73f4e00107a5.png)

```html
<body>
  <header>
    <h1 class="header__title">COUNTER</h1>
  </header>
  <main class="counter-app">
    <div class="set-diff">
      <form class="sef-diff__form">
        <input type="number" class="sef-diff__input" value="0" />
        <button class="counter__button">diff 설정</button>
      </form>
    </div>

    <div class="counter">
      <button class="counter__button">+1</button>
      <span class="counter__number">0</span>
      <button class="counter__button">-1</button>
    </div>
  </main>
</body>
```

## TODOS APP

![todo-list-app-template](https://user-images.githubusercontent.com/45627868/133920880-f8834022-a473-4687-8232-0c047ff2cf05.png)

```html
<body>
  <header>
    <h1 class="header__title">TODOS</h1>
  </header>
  <main class="todoapp">
    <div class="item-appender">
      <form action="">
        <input
          type="text"
          class="item-appender__input"
          placeholder="할 일을 추가해주세요"
          autofocus
        />
      </form>
    </div>
    <ul class="todo-list">
      <li>
        <div class="view">
          <input type="checkbox" class="toggle" checked="true" />
          <label class="completed">테스트 체크</label>
          <button class="destroy"></button>
        </div>
        <input type="text" class="edit" value="{editText}" />
      </li>
      <li>
        <div class="view">
          <input type="checkbox" class="toggle" />
          <label>테스트</label>
          <button class="destroy"></button>
        </div>
        <input type="text" class="edit" value="{editText}" />
      </li>
      <li class="editing">
        <div class="view">
          <input type="checkbox" class="toggle" checked="true" />
          <label class="completed"> 테스트 체크 </label>
          <button class="destroy"></button>
        </div>
        <input type="text" class="edit" value="에디트 텍스트" />
      </li>
    </ul>
    <div class="todo-list-footer">
      <span class="todo-count">총 2 개</span>
      <ul class="filters">
        <li data-filter="all" class="selected">전체보기</li>
        <li data-filter="active">해야할 일</li>
        <li data-filter="completed">완료한 일</li>
      </ul>
    </div>
  </main>
</body>
```

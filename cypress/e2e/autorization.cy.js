
describe('Проверка формы логина и пароля', function() {
  
  // 1.1 Ввести верный логин, пароль, нажать войти, проверить нужный текст и наличие кнопки крестик
    it('Верный логин, верный пароль', function() {
      cy.clearAllCookies();
      cy.visit('https://login.qa.studio/');
      cy.get('#loginButton').should('be.disabled')
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#loginButton').should('be.disabled')
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').should('be.enabled').click();
      cy.contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon');
    })

  // 1.2 Нажать "забыли пароль", ввести любой имейл, проверить текст и крустик
      it('Кнопка "Забыли пароль"', function() {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
      })

  // 1.3 Ввести верный логин, неверный пароль, нажать войти, проверить текст и крестик
    it('Верный логин, неверный пароль', function() {
      cy.clearAllCookies();
      cy.visit('https://login.qa.studio/');
      cy.get('#loginButton').should('be.disabled')
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#loginButton').should('be.disabled')
      cy.get('#pass').type('iLoveqastudio2');
      cy.get('#loginButton').should('be.enabled').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon');
    })

    // 1.4 Ввести неверный логин, верный пароль, нажать войти, проверить текст и крестик
      it('Неверный логин, верный пароль', function() {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled')
        cy.get('#mail').type('german@dol.ru');
        cy.get('#loginButton').should('be.disabled')
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
      })

    // 1.5 Ввести логин без @, правильный пароль,нажать войти, проверить текст с ошибкой
    it('Неверный логин (без @), верный пароль', function() {
      cy.clearAllCookies();
      cy.visit('https://login.qa.studio/');
      cy.get('#loginButton').should('be.disabled')
      cy.get('#mail').type('germandolnikov.ru');
      cy.get('#loginButton').should('be.disabled')
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').should('be.enabled').click();
      cy.contains('Нужно исправить проблему валидации');
      cy.get('#exitMessageButton > .exitIcon');
    })

    // 1.6 Ввести логин с верхним регистром, верный пароль, нажать войти, проверить успешную авторизацию
      it('Верный логин (с верхним регистром), верный пароль', function() {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled')
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled')
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
      })
})
  
describe('Добавление товара и оформление заказа', function() {
        it('Добавление и оформление заказа', function() {
        cy.clearAllCookies();
        cy.visit('https://huntingpony.com/'); // зашли на сайт
        cy.wait(1000); //ждем пока прогрузит страницу
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click(); // выбираем лежанки
        cy.wait(1000);
        cy.get('[data-product-id="338935313"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click(); // выбираем определенную лежанку
        cy.wait(1000);
        cy.get('.add-cart-counter__btn').click(); // добавляем в корзину
        cy.wait(1000);
        cy.get('[data-add-cart-counter-plus=""]').click(); // добавляем второй товар
        cy.wait(1000);
        cy.get('.add-cart-counter__detail').click();
        cy.get('.header__cart > .icon').click(); //переходим в корзину
        cy.wait(1000);
        cy.get('.cart-controls > .button').click(); // нажимаем кнопку оформить заказ
        cy.get('#client_surname').clear().type('Иванов');
        cy.get('#client_contact_name').clear().type('Иван');
        cy.get('#client_phone').clear().type('89999999999');
        cy.get('#client_email').clear().type('ivanovivan@mail.ru');
        cy.get('#shipping_address_country').select('Россия');
        cy.get('#shipping_address_full_locality_name').clear().type('г Санкт-Петербург');
        cy.get('#shipping_address_street').clear().type('Гастелло');
        cy.get('#shipping_address_house').clear().type('12');
        cy.get('#shipping_address_flat').clear().type('34');
        cy.get('[for="order_payment_gateway_id_3184571"] > .co-payment_method-input > span').click(); // выбор оплаты
        cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Мальчик'); // пол питомца
        cy.wait(1000);
        cy.get('#order_field_24333471').clear().type('Чихуахуа');
        cy.get('#order_field_24333473').clear().type('23.11.2022');
        cy.get('.co-sidebar').click();
        cy.get('#create_order').click();
        cy.wait(2000);
        cy.contains('Спасибо за заказ!');
      })
})
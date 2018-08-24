CREATE TABLE house_info (
    house_id SERIAL PRIMARY KEY,
    house_name character varying(80),
    house_info character varying(400),
    address character varying(120),
    city character varying(20),
    state character varying(20),
    zipcode character varying(10),
    image text,
    loan_amount money,
    mortgage money,
    rec_rent money,
    des_rent money,
    seller_id INTEGER,
    FOREIGN KEY (seller_id) references houser_users(user_id)
);

CREATE TABLE houser_users (
    user_id SERIAL PRIMARY KEY,
    username character varying(80),
    password character varying(10)
);
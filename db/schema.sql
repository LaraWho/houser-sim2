CREATE TABLE house_info (
    house_id SERIAL PRIMARY KEY,
    house_name VARCHAR(80),
    house_info VARCHAR(400),
    address VARCHAR(120),
    city VARCHAR(20),
    state VARCHAR(20),
    zip_code VARCHAR(10),
    image text,
    loan_amount money,
    mortgage money,
    rec_rent money,
    des_rent money
);
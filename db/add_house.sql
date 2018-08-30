insert into 
house_info (name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent, user_id)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
returning *;
select * from house_info
inner join houser_users on houser_users.user_id = house_info.seller_id
where user_id = $1;
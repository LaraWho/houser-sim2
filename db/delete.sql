delete from house_info
where house_id = $1;

select * from house_info
where user_id = $2;
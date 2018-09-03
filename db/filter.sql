select des_rent from house_info 
where des_rent = $1
returning *;
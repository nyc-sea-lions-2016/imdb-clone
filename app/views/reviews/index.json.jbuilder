json.array!@reviews do |review|
  json.id review.id
  json.content review.content
  json.film_id review.film_id
  json.user_id review.user_id
  json.created_at review.created_at
end

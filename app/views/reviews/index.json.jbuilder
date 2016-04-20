json.array!@reviews do |review|
  json.id review.id
  json.content review.content
  json.film review.film
  json.user review.user
  json.comments review.comments
  json.created_at review.created_at
end

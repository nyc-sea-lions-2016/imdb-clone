json.array!@reviews do |review|
  json.id review.id
  json.content review.content
  json.user review.find_user
end

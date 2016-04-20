json.user do
  json.email @user.email
  json.socialLogin @user.provider
  json.role @user.role.name
  json.reviews  @user.reviews.each do |review|
    json.film review.film.name
    json.content review.content
  end
  json.votes @user.votes.each do |vote|
end


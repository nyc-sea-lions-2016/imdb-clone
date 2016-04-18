ROLES = ['admin', 'regular', 'trusted']

20.times do
  User.create!({
    username: Faker::Internet.user_name,
    email: Faker::Internet.safe_email,
    password: '123',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    role_id: (1..3).sample,
    })
end

# information about movie api --> http://omdbapi.com/
# response = HTTParty.get('http://www.omdbapi.com/?')

# api to get film actors

100.times do
  Review.create({
    content: Faker::Lorem.paragraph,
    film_id: (1..10).sample,
    user_id: (1..20).sample,
    })
end

100.times do
  Comment.create!({
    Faker::ChuckNorris.fact
    })
end

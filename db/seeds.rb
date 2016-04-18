require 'csv'

#Aligns with categories in CSV file
['Romance','Crime','Comedy','Action','Drama','Sci-fi','Horror'].each do |category|
  Category.create!({ name: category })
end

CSV.foreach(filename = File.dirname(__FILE__) + "/popular_movies.csv", headers: true) do |row|

  film_actors = []
  row["Leading actors"].split(',').each do |actor|
    film_actors.push(Actor.create({name: actor}))
  end

  new_film = Film.create({
    name: row["Film"],
    director: row["Director"],
    year: row["Year of cinema release"].to_i,
    oscar_count: row["No of Oscars won"].to_i,
    imdb_link: row["IMDB link"],
    country: row["Country"],
    category_id: Category.find_by(name: row["Category"]).id
    })
    puts new_film.name
end


# Create 20 users
ROLES = ['admin', 'regular', 'trusted']
20.times do
  User.create!({
    username: Faker::Internet.user_name,
    email: Faker::Internet.safe_email,
    password: '123',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    role_id: (1..3).to_a.sample,
    })
end


#create 100 reviews
100.times do
  Review.create({
    content: Faker::Lorem.paragraph,
    film_id: (1..10).to_a.sample,
    user_id: (1..20).to_a.sample,
    })
end

#create 200 comments
TYPES = ['Review', 'Film']
200.times do
  Comment.create!({
    content: Faker::Hacker.say_something_smart,
    commentable_type: TYPES.sample,
    commentable_id: (1..100).to_a.sample,
    user_id: (1..20).to_a.sample
    })
end

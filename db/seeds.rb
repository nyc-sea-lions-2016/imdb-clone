# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


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

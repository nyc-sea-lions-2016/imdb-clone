class Actor < ActiveRecord::Base
  has_many :films, through: :film_actors

  validates :name, presence: true
end

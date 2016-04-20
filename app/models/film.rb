class Film < ActiveRecord::Base
  belongs_to :category
  has_many :actors, through: :film_actors
  has_many :comments, as: :commentable
  has_many :reviews
  has_many :ratings

  validates :name, :category_id, presence: true

  def average_rating
    @ratings = self.ratings.average(:value)
  end

end

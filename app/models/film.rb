class Film < ActiveRecord::Base
  belongs_to :category
  has_many :actors, through: :film_actors
  has_many :comments, as: :commentable
  has_many :reviews

  validates :name, :category_id, presence: true

  def average_rating
    @ratings = self.ratings
    @avg_rating = (@ratings.reduce(0){ |sum,rating| sum += rating.value})/(@ratings.length)
  end

end

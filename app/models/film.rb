class Film < ActiveRecord::Base
  belongs_to :category
  has_many :actors, through: :film_actors
  has_many :comments, as: :commentable
  has_many :reviews
  has_many :ratings

  validates :name, :category_id, presence: true

  def average_rating
    @ratings = self.ratings
    if @ratings.length > 0
      @avg_rating = (@ratings.reduce(0){ |sum,rating| sum += rating.value})/(@ratings.length)
    else
      @avg_rating = 'Be the first to rate this film!'
    end
    @avg_rating
  end

end

class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :film
  has_many :comments, as: :commentable

  validates :content, :film_id, :user_id, presence: true
end

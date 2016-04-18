class Review < ActiveRecord::Base

  validates :content, :film_id, :user_id, presence: true

end

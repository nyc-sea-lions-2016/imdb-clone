class Vote < ActiveRecord::Base

  validates :value, :user_id, :review_id, presence: true

end

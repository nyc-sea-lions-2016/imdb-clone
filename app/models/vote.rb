class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :review

  validates :value, :user_id, :review_id, presence: true
end

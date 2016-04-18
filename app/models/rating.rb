class Rating < ActiveRecord::Base
  belongs_to :user
  belongs_to :film

  validates :value, :user_id, :film_id, presence: true
  validate :rating_value

  private
  def rating_value
    value.between?(0,5) ? true : errors.add(:base, 'You must rate this between 0 and 5 stars')
  end
end

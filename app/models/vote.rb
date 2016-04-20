class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :review

  validates :value, :user_id, :review_id, presence: true
  validate :unique_user_review_combo

private

  def unique_user_review_combo
    if Vote.find_by(user_id: user_id, review_id: review_id)
      errors.add(:base, 'You have already voted for this review!')
    else
      true
    end
  end

end

class User < ActiveRecord::Base

  belongs_to :role
  has_many :reviews
  has_many :votes
  has_many :ratings
  has_many :comments

  validates :email, :role_id, presence: true
  validates :email, uniqueness: true
  validates :role_id, inclusion: {in: [1,2,3]}

  devise :database_authenticatable,
         :registerable,
         # :confirmable,
         :lockable,
         :timeoutable,
         :omniauthable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable
end

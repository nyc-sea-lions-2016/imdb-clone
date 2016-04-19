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
         :recoverable,
         :rememberable,
         :trackable,
         :validatable,
         :omniauthable,
         :omniauth_providers => [:facebook, :twitter]

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
  end
end

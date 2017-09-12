class Recipe < ApplicationRecord
  belongs_to :user
  has_many :items, dependent: :destroy
  validates :name, presence: true, uniqueness: {
    message: "Recipe already exists!",
    case_sensitive: false
  }
end

class Item < ApplicationRecord
  belongs_to :user
  belongs_to :recipe
  accepts_nested_attributes_for :recipe
  validates :name, presence: true, uniqueness: { scope: :recipe, case_sensitive: false,
                                                message: "Ingredient already exists in this recipe."}
end

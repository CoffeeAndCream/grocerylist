class AddColumnToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :added_to_cart, :boolean
  end
end

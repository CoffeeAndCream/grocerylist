class AddColumnToItems < ActiveRecord::Migration[5.0]
  def change
    add_reference :items, :recipe, foreign_key: true
  end
end

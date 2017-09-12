class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.decimal :quantity
      t.string :quantity_type
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

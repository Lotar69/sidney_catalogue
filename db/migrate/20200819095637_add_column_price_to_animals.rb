class AddColumnPriceToAnimals < ActiveRecord::Migration[6.0]
  def change
    add_column :animals, :price, :integer
  end
end

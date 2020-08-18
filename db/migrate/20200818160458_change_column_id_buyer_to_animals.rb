class ChangeColumnIdBuyerToAnimals < ActiveRecord::Migration[6.0]
  def change
    change_column :animals, :buyer_id, :integer
  end
end

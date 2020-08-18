class ChangeColumnIdBuyerToAnimalsV2 < ActiveRecord::Migration[6.0]
  def change
    change_column :animals, :buyer_id, :integer, null: true
  end
end

class ChangeEmailDefaultToTrue < ActiveRecord::Migration[6.0]
  def change
    change_column :sellers, :email, :string, null: true
    change_column :buyers, :email, :string, null: true
    remove_index :sellers, :email
    remove_index :buyers, :email
  end
end

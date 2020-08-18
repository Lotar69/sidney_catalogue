class AddUserName < ActiveRecord::Migration[6.0]
  def change
    add_column :buyers, :user_name, :string, unique: true
    add_column :sellers, :user_name, :string, unique: true

  end
end

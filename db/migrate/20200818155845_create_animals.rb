class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :gender
      t.string :category
      t.string :age
      t.string :stage
      t.string :health
      t.text :description
      t.references :seller, null: false, foreign_key: true
      t.references :buyer, null: false, foreign_key: true
      t.date :solded_date

      t.timestamps
    end
  end
end

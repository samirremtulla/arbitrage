class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.references :user
      t.integer :score

      t.timestamps
    end
    add_index :games, :user_id
  end
end

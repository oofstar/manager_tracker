class CreateKylees < ActiveRecord::Migration[5.0]
  def change
    create_table :kylees do |t|
      t.string :name, null: false
    end
  end
end

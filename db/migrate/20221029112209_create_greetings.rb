class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :name
      t.string :message
      t.timestamps
    end
  end
end

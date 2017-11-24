require 'csv'

class Reading < ApplicationRecord

  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      Reading.create! row.to_hash
    end
  end

    # csv_text = File.read('...')
    # csv = CSV.parse(csv_text, :headers => true)
    # csv.each do |row|
    #   Reading.create!(row.to_hash)
    # end


end

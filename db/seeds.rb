# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

readings = Readings.import("/Users/jotonyguerra/challenges/capstone_v1/Diacomm1/app/assets/dexcom/CLARITY_Export_Guerra_Jotony_2017-11-09+033852.csv")

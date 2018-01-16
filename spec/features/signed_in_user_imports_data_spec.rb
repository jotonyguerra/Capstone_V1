require 'rails_helper'

feature 'signed in user imports dexcom data' do
  context "Signed in User" do
   let(:user) {FactoryBot.create(:user)}
   before { login_as(user, scope: :user)}

   scenario "sees a 'import dexcom data' link" do
     visit root_path
     expect(page).to have_content("Import Dexcom Data")
   end

   scenario "user attempts to upload incorrect file" do
     visit root_path
     click_link("Import Dexcom Data")
     click_button('Import Dexcom Data')
     expect(page).to have_content("please select a valid file")
   end
   scenario "user attempts to upload a non csv file" do
     visit root_path
     click_link("Import Dexcom Data")

   end
# need js driver?
   scenario "user attempts to upload a correct file" do
     visit root_path
     click_link("Import Dexcom Data")
     expect(page).to have_css("input", :count => 2)
     attach_file('file', File.absolute_path('/Users/jotonyguerra/Downloads/CLARITY_Export_Guerra_Jotony_2017-11-09+033852.csv'))
     click_button('Import Dexcom Data')
     expect(page).to have_content("Readings Imported!")
   end

 end
end

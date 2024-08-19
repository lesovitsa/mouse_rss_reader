require 'rails_helper'

RSpec.describe "Feeds", type: :request do

    before do
        Feed.create(url: "http://rss.cnn.com/rss/cnn_topstories.rss")
    end

    scenario "Sends a get request to view all titles" do

        get "http://localhost:3000/titles"

        expect(response).to have_http_status(:success)
        titles = JSON.parse(response.body)["titles"]
        expect(titles.length).to be >= 1
    end
end
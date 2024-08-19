require 'rails_helper'

RSpec.describe "Feeds", type: :request do

    before do
        Feed.create(url: "http://rss.cnn.com/rss/cnn_topstories.rss")
        Feed.create(url: "http://www.cbsnews.com/latest/rss/main")
        Feed.create(url: "http://www.cbsnews.com/latest/rss/main")
    end

    scenario "Sends a get request to view all feeds" do

        get "http://localhost:3000/feeds/all"

        expect(response).to have_http_status(:success)
        feeds = JSON.parse(response.body)["feeds"]
        expect(feeds.length).to eq(3)
    end
end
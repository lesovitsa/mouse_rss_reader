require 'rails_helper'

RSpec.describe "Feeds", type: :request do

    scenario "Sends a post request to add a feed" do

        post "http://localhost:3000/feeds/add", params: {url: "http://rss.cnn.com/rss/cnn_topstories.rss"}

        expect(response).to have_http_status(:success)
        feed = JSON.parse(response.body)
        expect(feed["feed"]["url"]).to eq("http://rss.cnn.com/rss/cnn_topstories.rss")
    end

    scenario "Sends a post request to add a feed with an invalid URL" do

        post "http://localhost:3000/feeds/add", params: {url: ""}

        expect(response).to have_http_status(500)
        feed = JSON.parse(response.body)
        expect(feed["error"]).to eq("Failed to create feed ")
    end
end
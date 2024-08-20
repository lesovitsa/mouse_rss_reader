require 'rails_helper'

RSpec.describe "Feeds", type: :request do

    before do
        @feed = Feed.create(url: "http://rss.cnn.com/rss/cnn_topstories.rss")
    end

    scenario "Sends a patch request to change a feed" do

        patch "http://localhost:3000/feeds/update", params: {id: @feed["id"], url: "http://rss.cnn.com/rss/cnn_topstories.rcs"}

        expect(response).to have_http_status(:success)
        result = JSON.parse(response.body)["feed"]
        expect(result["id"]).to eq(@feed["id"])
        expect(result["url"]).to eq("http://rss.cnn.com/rss/cnn_topstories.rcs")
    end

    scenario "Sends a post request to add a feed with an invalid URL" do

        post "http://localhost:3000/feeds/update", params: {id: @feed["id"], url: ""}

        expect(response).to have_http_status(500)
    end

    after do
        @feed.destroy
    end
end
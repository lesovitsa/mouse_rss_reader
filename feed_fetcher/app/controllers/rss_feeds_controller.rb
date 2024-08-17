require 'rss'

class RssFeedsController < ApplicationController
    def fetch_feeds_content
        feeds_info = Feed.all
        urls = feeds_info.map{ |feed| feed[:url] }

        feeds = urls.map { |url|
            RSS::Parser.parse(URI.open(url)).
                channel.items.map { |item| {
                    title: item.title,
                    link: item.link,
                    date: item.pubDate
                }
            }
        }.flatten

        filtered = feeds.select{ |item| item[:title] && item[:link] && item[:date] }
        sorted = filtered.sort_by{ |item| item[:date] }.reverse

        render json: { titles: sorted }, status: 200
    end
end

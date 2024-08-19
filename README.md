# mouse_rss_reader

## Start project

Before starting the project locally, you need to have a `postgresql` database up and running.

To start the project locally, first run the following commands in the `feed_fetcher` directory:

```
> rake db:create
> rake db:migrate
> rake db:seed
> rails server
```

After that go to the `rss_viewer` folder and execute:

```
npm start
```

When prompted, select to run on a different port.

## Testing

To run tests, in `feed_fetcher` execute:

```
rspec
```
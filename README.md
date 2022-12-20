[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)

[![badge](https://img.shields.io/github/stars/apivideo/videoPlaylist?style=social)](https://github.com/apivideo/videoPlaylist)

[![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)

![](https://github.com/apivideo/.github/blob/main/assets/apivideo_banner.png)

<h1 align="center">api.video watcha. video playlist</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

# videoPlaylist

A basic HTML & JavaScript app that reads an array of [api.video](https://api.video) videoIds.  Using the [api.video player SDK](https://docs.api.video/docs/video-player-sdk), the app creates a video player, and then when the video is done - destroys the player, and creates a new player - with the next videoId

This essentially creates a "playlist"  Each video in the array will be played: one after another.


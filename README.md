[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)

[![badge](https://img.shields.io/github/stars/apivideo/videoPlaylist?style=social)](https://github.com/apivideo/videoPlaylist)

[![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)

![](https://github.com/apivideo/API_OAS_file/blob/master/apivideo_banner.png)

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

# videoPlaylist

Same JS app that reads an array of [api.video](https://api.video)  videoIds.  Creates a video player, and then when the video is done - destroys the player, and creates a new player - with the next videoId

This essentially creates a "playlist"  Each video in the array will be played: one after another.

